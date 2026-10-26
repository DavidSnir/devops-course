users = {
    "alice": "1234",
    "bob": "abcd",
    "charlie": "pass"
}

def login(username, password):
    if users[username] == password:
        return True
    return False


username = input("Enter username: ")
password = input("Enter password: ")

try:
    is_login = login(username, password)
except KeyError:
    print("User does not exist.")
else:
    if is_login:
        print("Login successful")
    else:
        print("Invalid credentials")
    
    
