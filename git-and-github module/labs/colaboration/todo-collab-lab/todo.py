def add_task(task):
    with open("tasks.txt", "a") as f:
        f.write(task + "\n")

def list_tasks():
    with open("tasks.txt", "r") as f:
        return f.readlines()
    
def remove_last_task():
    with open("tasks.txt", "r") as f:
        lines = f.readlines()
    with open("tasks.txt", "w") as f:
        f.writelines(lines[:-1])
        
        
def update_first_task(new_task):
    with open("tasks.txt", "r") as f:
        lines = f.readlines()
    lines[0] = new_task + "\n"
    with open("tasks.txt", "w") as f:
        f.writelines(lines)     
        
def count_tasks():
    with open("tasks.txt", "r") as f:
        return len(f.readlines())   