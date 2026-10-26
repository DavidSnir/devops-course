#1
# counter = 0
# while counter < 5:
#     print(counter+1)
#     counter+=1

# #2
# counter = 5
# while counter > 0:
#     print(counter)
#     counter-=1
    
# #3
# counter = 1
# while counter < 11:
#     if counter%2==0:
#         print(counter)
#     counter+=1

#4
# counter =1
# sum =0
# while counter < 6:
#     sum+=counter
# print(sum)

#5
# counter = 1
# while counter < 11:
#     if counter%3==0:
#         print(counter)
#     counter+=1

#6
# user_num = int(input("Choose a number "))
# counter = 0
# while counter < 5:
#     print(user_num)
#     counter +=1
    
#7
# user_num = int(input("Choose a number "))
# counter = 1
# while counter < user_num:
#     print(counter)
#     counter += 1

#8
# while True:
#     user_num = int(input("Choose a number "))
#     if user_num == 0:
#         break

#9
# while True:
#     user_pass = input("Choose a password: ")
#     if user_pass == "1234":
#         break

#10
# while True:
#     user_answer = input("Press 'y' to continue, 'n' to stop")
#     if user_answer == 'y':
#         print("We will continue")
#     elif user_answer == 'n':
#         print("lets stop")
#         break
#     else:
#         print("wrong input")

#11
# counter = 1
# while counter < 11:
#     if counter%2==0:
#         print(counter)
#     counter+=1

#12
# i = 1
# counter = 0
# while i < 21:
#     if i%2==0:
#         counter += 1
#     i+=1
# print(counter)

#13
# i = 1
# counter = 0
# while i < 11:
#     if i%2==1:
#         counter += i
#     i+=1
# print(counter)

#14
# while True:
#     user_input = input("choose a number. I'll tell you if its odd or even. Press 'q' to quit: ")
#     if user_input == 'q':
#         break
#     elif int(user_input) % 2 == 0:
#         print("Even")
#     elif int(user_input) % 2 == 1:
#         print("Odd")
#     else:
#         print("Invalid input")

#15
# max = int(input("Choose a number: "))
# i = 0
# while i < 4:
#     usernum = int(input("Choose another number: "))
#     if max < usernum:
#         max = usernum
#     i += 1
# print(f"the biggest number you wrote was {max}")

#16
# while True:
#     if input("Write 'exist' to exist") == 'exist':
#         break

#17
# i = 1
# while i < 11:
#     if i == 7:
#         break
#     print(i)
#     i += 1

#18
# sum = 0
# while True:
#     userinput = int(input("Wrtie a number, if you want to quit write a negative number: "))
#     if userinput < 0:
#         break
#     sum += userinput
# print(sum)

#19
# secretnum = 22
# while True:
#     userguess = input("Guess the secret number: ")
#     if userguess == secretnum:
#         break
#     else:
#         print("Try again")
# print("Nice Guess")

#20
counter = 0
while True:
    if input("Write stop to stop: ") == 'stop':
        break
    counter += 1
print(f"You entered {counter} inputs")