from todo import add_task, list_tasks , remove_last_task, update_first_task , count_tasks

add_task("Initial task by A")
add_task("B: buy groceries")
add_task("A: clean room")
remove_last_task()
add_task("B: replaced last task")
update_first_task("A: updated first task")

print("Run by B")

tasks = list_tasks()
for t in tasks:
    print(t)
    
print("Total tasks:", count_tasks())    