friends = ["Rolf", "Bob", "Jen"]
print("Jen" in friends)
print("Anne" in friends)

best_movies= {"Star Wars", "Interstaller", "Inception"}
user_movie = input("Enter a movie you have watched recently: ")
print(f"is the movie one of the best? {user_movie in best_movies}")

print("rix" in " The Matrix")
print("xyz" in " The Matrix")

if user_movie in best_movies:
    print("you chose one of the best movies")
else:
    print("that's some bad movie you picked right there")
    