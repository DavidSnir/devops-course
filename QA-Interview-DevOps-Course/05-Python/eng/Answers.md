
1. Core Differences:
   - List: Ordered collection of items. Allows duplicate elements. Elements are accessed using numerical indexes (e.g., my_list[0]).
   - Set: Unordered collection of unique items. Completely blocks duplicate values. Elements cannot be accessed by an index or a key; you typically check for existence using the 'in' keyword.
   - Dictionary: Unordered (or insertion-ordered in modern Python) collection of Key-Value pairs. Keys must be completely unique and immutable, but values can be anything. Elements are accessed instantly via their keys (e.g., my_dict['key']).


2. Scenario Solutions:
   - Scenario A -> Set: Ideal because you only care about uniqueness and fast membership testing (checking if an ID exists).
   - Scenario B -> List: Ideal because duplicate items are allowed and maintaining the exact sequential order of addition matters.
   - Scenario C -> Dictionary: Ideal because it maps a unique lookup identifier (the username key) directly to a piece of data (the email value).


3. Answer 4: Web Frameworks (Flask vs. FastAPI)


A) Architectural Execution Model:
   - Flask: Traditionally a synchronous (WSGI-based) framework. It handles requests one by one per thread. While it can run concurrently using multi-threading or workers, the code itself is written synchronously.
   - FastAPI: A natively asynchronous (ASGI-based) framework. It is built from the ground up to support the 'async' and 'await' keywords, allowing it to handle thousands of concurrent requests on a single thread by not blocking while waiting for I/O operations (like database queries or API calls).


B) Benefits of Type Hinting in FastAPI:
   - Automatic Data Validation: FastAPI uses Pydantic behind the scenes. If an API endpoint expects an integer and gets a string, it automatically blocks the request and returns a clear error to the client without you writing validation logic.
   - Automatic Interactive Documentation: It automatically parses the type hints to generate interactive Swagger UI and ReDoc documentation pages (/docs) instantly without extra code.


C) Scenario Decision:
   - You should choose FastAPI. Because WebSockets and real-time streaming require persistent, open connections, a synchronous framework like Flask can quickly exhaust its thread pool. FastAPI's native async architecture handles persistent concurrent connections incredibly efficiently, making it the industry standard for modern, high-performance async APIs.


4) Python Context Managers (The 'with' Statement)


A. Context managers ensure that system resources are safely cleaned up and closed after use. Forgetting them causes "resource leaks." Over time, the operating system can run out of file descriptors or network ports, causing the script or the entire host environment to crash with "Too many open files" errors.


B. Roles of the methods:
   - __enter__: Executes immediately when entering the block. It allocates the resource (e.g., opens a file handler) and optionally returns it.
   - __exit__: Is guaranteed to run when leaving the block, even if an unhandled script exception or crash occurs inside. It handles the mandatory teardown or closure of the resource.


C. You would have to implement a manual 'try...finally' block:
   
   resource = open("log.txt", "r")
   try:
       # execution logic goes here
       data = resource.read()
   finally:
       resource.close()  # Guaranteed to run no matter what happens in the try block





