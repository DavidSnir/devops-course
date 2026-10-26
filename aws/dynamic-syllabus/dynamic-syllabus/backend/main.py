from fastapi import FastAPI, HTTPException, Body, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from bson import ObjectId
from datetime import datetime
from models import SyllabusDocument, SyllabusCreate, SyllabusUpdate, Module
from database import syllabuses_collection
from dotenv import load_dotenv
import os

load_dotenv()

ADMIN_PASSWORD = os.getenv('ADMIN_PASSWORD', '')

app = FastAPI(title="Syllabus API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    existing = await syllabuses_collection.find_one({})
    if existing is None:
        await syllabuses_collection.insert_one(DEFAULT_SYLLABUS)

@app.post("/api/syllabus", response_description="Add new syllabus", response_model=SyllabusDocument)
async def create_syllabus(syllabus: SyllabusCreate = Body(...)):
    syllabus_data = jsonable_encoder(syllabus)
    new_syllabus = await syllabuses_collection.insert_one(syllabus_data)
    created_syllabus = await syllabuses_collection.find_one({"_id": new_syllabus.inserted_id})
    return created_syllabus

@app.get("/api/syllabus", response_model=SyllabusDocument)
async def get_syllabus():
    syllabus = await syllabuses_collection.find_one({})
    if syllabus is None:
        raise HTTPException(status_code=404, detail="Syllabus not found")
    syllabus["_id"] = str(syllabus["_id"])
    return syllabus

@app.put("/api/syllabus", response_model=SyllabusDocument)
async def update_syllabus(syllabus: SyllabusUpdate = Body(...)):
    syllabus_dict = syllabus.model_dump()
    admin_password = syllabus_dict.pop('admin_password', None)
    
    if ADMIN_PASSWORD and admin_password != ADMIN_PASSWORD:
        raise HTTPException(status_code=403, detail="Invalid admin password")
    
    syllabus_data = {k: v for k, v in syllabus_dict.items() if v is not None}
    
    existing = await syllabuses_collection.find_one({})
    if existing:
        await syllabuses_collection.update_one(
            {"_id": existing["_id"]}, {"$set": syllabus_data}
        )
        updated = await syllabuses_collection.find_one({"_id": existing["_id"]})
        return updated
    
    raise HTTPException(status_code=404, detail="Syllabus not found")

@app.post("/api/syllabus/seed", response_model=SyllabusDocument)
async def seed_syllabus():
    await syllabuses_collection.delete_many({})
    result = await syllabuses_collection.insert_one(DEFAULT_SYLLABUS)
    syllabus = await syllabuses_collection.find_one({"_id": result.inserted_id})
    return syllabus

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
