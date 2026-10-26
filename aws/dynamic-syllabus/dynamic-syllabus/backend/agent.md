# Project Overview: Syllabus App Backend

## Info
- **Tech Stack:** FastAPI (Python)[cite: 1]
- **Frontend:** React Vite[cite: 1]
- **Purpose:** An application for presenting academic or professional syllabuses.[cite: 1]

## Execution
- **Database Connection:** FastAPI routes will connect to a **MongoDB Atlas** database.[cite: 1]
- **Database Name:** `prod`
- **Collection Name:** `syllabuses`[cite: 1]
- **Syllabus Object Structure: (a list of) **[cite: 1]
    1. Module name[cite: 1]
    2. Description[cite: 1]
    3. Start date[cite: 1]
    4. End date[cite: 1]
    5. Instructor[cite: 1]
    6. Location[cite: 1]
    7. Sub-modules and their descriptions[cite: 1]

## Core Files
- `database.py`: Manages the MongoDB Atlas connection and collection initialization.
- `main.py`: Contains the FastAPI application instance and the CRUD route handlers.
- `models.py`: Defines the Pydantic data models for validation and database mapping.

## API Routes
- `GET /syllabus` - Retrieve all syllabuses.[cite: 1]
- `GET /syllabus/{id}` - Retrieve a specific syllabus by ID.[cite: 1]
- `POST /syllabus` - Create a new syllabus entry in the database.[cite: 1]
- `PUT /syllabus/{id}` - Update an existing syllabus by its ID.

## Tests
- **Framework:** `pytest` with `pytest-asyncio` for asynchronous endpoint testing.
- **Dependencies:** `httpx` is used as the async test client.
- **Coverage:**
    - Database connection validation.
    - CRUD Operations:
        - `POST`: Create a syllabus and verify persistence.
        - `GET`: Retrieve a single syllabus and list all.
        - `PUT`: Update specific fields and verify changes.
        - `DELETE`: Remove a syllabus and confirm it no longer exists.
- **Execution:**
    ```bash
    ./.venv/bin/python -m pytest
    ```
[cite: 1]

## commands
```bash
uvicorn main:app --reload
```