users = ["Alice", "Bob", "Charlie"]

def get_user(index):
    return users[index]


user_index = input("Enter user index: ")
try:
    users[int(user_index)]
except IndexError as e:
    print("user out of range")
except ValueError as e:
    print(e)
else:
    user = get_user(int(user_index))
    print("Selected user:", user)