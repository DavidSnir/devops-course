from utils import *

while True:
    print("1.Create 2.Deposit 3.Withdraw 4.Show 5.Admin View 6.Exit")

    choice = input("Choose: ")

    if choice == "1":
        create_account()

    elif choice == "2":
        deposit()

    elif choice == "3":
        withdraw()

    elif choice == "4":
        show_account()

    elif choice == "5":
        show_all_accounts()

    elif choice == "6":
        break