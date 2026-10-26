# app.py
from utils import add_entry, read_entries, delete_last_entry

add_entry("A: refining update")

delete_last_entry()
add_entry("B iteration")

for line in read_entries():
    print(line)
    