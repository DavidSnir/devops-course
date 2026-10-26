def get_age():
    age = input("Enter your age: ")
    try:
        int(age)
    except ValueError as e:
        print(e)
        get_age()
    else:
        return int(age)


age = get_age()
print("Your age is:", age)