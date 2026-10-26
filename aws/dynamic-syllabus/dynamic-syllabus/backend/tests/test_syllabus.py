import pytest
import json
from httpx import AsyncClient, ASGITransport
from main import app

@pytest.mark.asyncio
async def test_get_syllabus_writes_to_file():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/api/syllabus")
    
    assert response.status_code == 200
    data = response.json()
    
    with open("syllabus_output.json", "w") as f:
        json.dump(data, f, indent=2, default=str)
    
    with open("syllabus_output.json", "r") as f:
        loaded_data = json.load(f)
    
    assert "syllabus" in loaded_data
    assert len(loaded_data["syllabus"]) > 0
    
    first_module = loaded_data["syllabus"][0]
    assert "module_name" in first_module
    assert "description" in first_module
    assert "start_date" in first_module
    assert "end_date" in first_module
    
    print(f"Successfully wrote {len(loaded_data['syllabus'])} modules to syllabus_output.json")