#1
# for num in range(1,6):
#     print(num)

#2
# for num in range(5,0,-1):
#     print(num)

#3
# for num  in range(1,11):
#     if num % 2 == 0:
#         print(num)

#4
# for num in range(1,11):
#     print(num)

#5
# for num  in range(1,21):
#     if num % 3 == 0:
#         print(num)

#6
# for num in range(5):
#     print("hello")
    
#7
# for num in range(1,10):
#     print(num)

#8
# for num in range(2,21,2):
#     print(num)

#9
# for num in range(10,-1,-1):
#     print(num)

#10
# sum = 0
# for num in range(1,101):
#     sum += num
    
# print(sum)

#11
names = ["david","yuval","Alon"]
# for name in names:
#     print(name)

#12
# counter = 0
# for name in names:
#     counter +=1
# print(counter)

#13
numlist = range(-89,12,3)
# sum =0
# for num in numlist:
#     sum += num
# print(sum)

#14
# max=numlist[0]
# for num in numlist:
#     if max < num:
#         max = num
# print(max)

#15
# for name in names:
#     if name[0] == 'A':
#         print(name)

#16
# for num  in numlist:
#     if num % 2 == 0:
#         print(num)

#17
# counter = 0
# for num in numlist:
#     if num > 10:
#         counter += 1
# print(counter)

#18
# for num  in numlist:
#     if num % 2 == 0 and num % 3 == 0:
#         print(num)

#19
# for num in numlist:
#     print(num*num)

#20
possitive_num_list = []
for num in numlist:
    if num > 0:
        possitive_num_list.append(num)
print(possitive_num_list)