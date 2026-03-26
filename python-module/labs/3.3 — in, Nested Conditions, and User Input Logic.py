movies = {"Avatar", "Wizard of oz", "Cars"}
user_movie = input("Enter a movie you have watched recently: ")
if user_movie in movies:
    print("You chose well my friend")
else:
    print("Thats some bad choise")

secret_number=22
user_input = input("Enter Y if you would like to play: ")
accepted_answers = ("y","Y","n")
if user_input in accepted_answers:
    user_guess = int(input("guess a number 1 - 100000: "))
    if user_guess == secret_number:
        print("who told you the secret number?")
    elif (user_guess - secret_number).abs() == 1:
        print("You were off by one.")
    else:
        print("its okay you can try again later")
        