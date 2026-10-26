# utils.py
def add_entry(text):
    with open("data.txt", "a") as f:
        f.write(text + "\n")

def read_entries():
    with open("data.txt", "r") as f:
        return f.readlines()
    
    
def delete_last_entry():
    with open("data.txt", "r") as f:
        lines = f.readlines()
    with open("data.txt", "w") as f:
        f.writelines(lines[:-1])   