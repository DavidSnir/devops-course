import asyncio
from database import client, db, syllabuses_collection
from dotenv import load_dotenv

load_dotenv()

async def test_connection():
    try:
        # The ismaster command is cheap and does not require auth.
        await client.admin.command('ismaster')
        print("MongoDB connection successful!")
        
        collections = await db.list_collection_names()
        print(f"Collections: {collections}")
        
        if "syllabuses" in collections:
            print("Found 'syllabuses' collection.")
        else:
            print("'syllabuses' collection NOT found.")
            
    except Exception as e:
        print(f"MongoDB connection failed: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(test_connection())
