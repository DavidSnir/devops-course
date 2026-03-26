name = input("Enter your name: ")
age = input("Enter your age: ")
city = input("Enter your city: ")

hobbies = input('Enter 3 hobbies with ", " between them: ').split(",")

popular_hobbies = ["music", "sports", "gaming", "reading"]

for hobbie in popular_hobbies:
    if hobbie in hobbies:
        print(hobbie)
       
hobbies = set(hobbies)
popular_hobbies = set(popular_hobbies)

print(popular_hobbies-hobbies)
print(len(hobbies))
print(len(popular_hobbies-hobbies))

hobbies = tuple(hobbies)
print(f"Is music a hoby? {"music" in hobbies}")
