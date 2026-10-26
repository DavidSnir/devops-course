import datetime as dt
import math as math
# #1
# print(dt.datetime.now().date())

# #2
# print(dt.datetime.now().time())

# #3
# print(dt.datetime.now().strftime("%Y"))

# #4
# born_year = int(input("What year were you born? "))
# age = int(dt.datetime.now().strftime("%Y")) - born_year
# print(f"your are {age} years old")

#5
# today = int(dt.date.today().strftime("%j"))
# print(365-today)

# #6
# print(dt.datetime.now().weekday()+2)

# #7
# add_10_days = dt.timedelta(days=10)
# future_date = dt.datetime.now()+add_10_days
# print(future_date.strftime('%d/%m/%Y'))

# #8
# today = dt.datetime.now()
# tommrow = today + dt.timedelta(days=1)

# delta = tommrow -today
# print(delta.days)

# #9
# today = dt.datetime.now()
# print(today.strftime("%d/%m/%Y %H:%M"))

# #10
# weekday_now = dt.datetime.now().weekday() + 2
# if weekday_now > 5:
#     print("weekend")
# else:
#     print("weekday")

# -----------------------------------------------------

# #11
# print(math.sqrt(16))

#12
# print(2**3)

# #13
# print(math.ceil(4.2))

# #14
# print(math.floor(4.8))

# #15
# print(abs(-10))

# #16
# print(math.pi)

# #17
# radius = 2
# print(math.pi*radius**2)

# #18
# x = 9
# y = -10
# print(abs(x-y))

# #19
# numbers = range(-8,100,5)
# print(sum(numbers)/ len(numbers))