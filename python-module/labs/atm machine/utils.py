accounts = {
    "account_id": 100,
    "name": "Liron",
    "pin": 1234,
    "balance": 500
}

ADMIN_USER = 'Admin'
ADMIN_PASS='Pass'

id = 101

def find_account(account_id):
    for account in accounts:
        if account["account_id"] == account_id:
            return account
    return None

def check_pin(account,pin):
    return int(account["pin"]) == pin
    pass

def admin_login():
    username_input = input("Username: ")
    pass_input = input("Password: ")
    
    if ADMIN_USER == username_input and ADMIN_PASS == pass_input:
        return True
    else:
        print("accses denied")
        return False

def create_account():
    if not admin_login():
        return

    name = input("Enter name: ")
    pin = input("Set PIN: ")

    account = {
        "account_id": id,
        "name": name,
        "pin": pin,
        "balance": 0
    }
    
    id += 1

    accounts.append(account)

def withdraw():
    account_id = int(input("Account ID: "))
    pin = input("PIN: ")
    amount = float(input("Amount: "))

    account = find_account(account_id)

    if not account:
        print("Account not found")
        return

    if not check_pin(account, pin):
        print("Wrong PIN")
        return

    if account["balance"] < amount:
        print("Insufficient funds")
        return

    account["balance"] -= amount

def deposit():
    account_id = int(input("Account ID: "))
    pin = input("PIN: ")
    amount = float(input("Amount: "))

    account = find_account(account_id)

    if not account:
        print("Account not found")
        return

    if not check_pin(account, pin):
        print("Wrong PIN")
        return

    if amount <= 0:
        print("Invalid amount")
        return

    account["balance"] += amount

def show_account():
    account_id = int(input("Account ID: "))
    pin = input("PIN: ")

    account = find_account(account_id)

    if not account:
        print("Account not found")
        return

    if not check_pin(account, pin):
        print("Wrong PIN")
        return

    print(account)

def show_all_accounts():
    if not admin_login():
        return

    for acc in accounts:
        print(acc)

def show_balance():
    pass
