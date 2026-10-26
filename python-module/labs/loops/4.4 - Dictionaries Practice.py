# #1
# friend_ages = {
#     "Rolf": 24,
#     "Adam": 30,
#     "Anne": 27
# }
# print(friend_ages["Anne"])

# #2
# friend_ages = {
#     "Rolf": 24,
#     "Adam": 30
# }
# friend_ages["Bob"] = 20
# print(friend_ages)

# #3
# friend_ages = {
#     "Rolf": 24,
#     "Adam": 30
# }
# friend_ages["Rolf"] = 40

# #4
# student_attendance = {
#     "Rolf": 96,
#     "Bob": 80,
#     "Anne": 100
# }
# if "Bob" in student_attendance:
#     print("Bob attended")

# #5
# student_attendance = {
#     "Rolf": 96,
#     "Bob": 80
# }
# for student in student_attendance:
#     print(student)

# #6 + 7
# student_attendance = {
#     "Rolf": 96,
#     "Bob": 80
# }
# for student, attend in student_attendance.items():
#     print(f"{student} attended {attend} times")

# #8
# student_attendance = {
#     "Rolf": 100,
#     "Bob": 80,
#     "Anne": 60
# }
# sum = 0
# for num in student_attendance.values():
#     sum += num
# print(sum/len(student_attendance))

# #9
# friends = [
#     {"name": "Rolf", "age": 24},
#     {"name": "Adam", "age": 30}
# ]
# print(friends[1]["name"])

#10
friends = [
    {"name": "Rolf", "age": 24},
    {"name": "Adam", "age": 30},
    {"name": "Anne", "age": 27}
]

result = []
for friend in friends:
    if friend["age"] > 25:
        result.append(friend)
print(result)