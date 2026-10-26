
1. Explain the fundamental differences between a List, a Set, and a Dictionary. Consider factors like:
   - Ordering (Are elements ordered or unordered?)
   - Duplicates (Are duplicate items allowed?)
   - Access (How do you retrieve data?)


2. For each of the following scenarios, identify which data structure (List, Set, or Dictionary) is the best choice:
   - Scenario A: Storing a collection of unique user IDs to check if a specific user is currently logged in.
   - Scenario B: Storing a shopping cart where the order of items matters, and the user can add the same item multiple times.
   - Scenario C: Storing user profiles where you need to quickly look up a user's email address using their specific username.


3. Flask and FastAPI are two of the most popular Python micro-frameworks used to build backend APIs, but they are built on fundamentally different modern concepts.


A) What is the core architectural difference between how Flask and FastAPI handle incoming network requests? (Hint: Think about concurrency and execution models).
B) FastAPI relies heavily on standard Python "type hinting" (e.g., name: str). What two massive benefits does FastAPI automatically provide out of the box because of this?
C) If you were starting a brand-new project that heavily features real-time data streaming, WebSockets, and heavy asynchronous database calls, which framework should you choose and why?


4) Python Context Managers (The 'with' Statement)


When writing automation scripts that interact with system resources—like files, network sockets, or database connections—it is standard practice to use a 'with' block.


A. What resource management problem does a Context Manager solve, and what can happen to a container or server if you repeatedly fail to use them?
B. Explain the runtime roles of the two magic dunder methods that power a context manager behind the scenes: '__enter__' and '__exit__'.
C. If the 'with' keyword did not exist in Python, write the structure of the block you would have to use manually to guarantee the exact same safe execution.

