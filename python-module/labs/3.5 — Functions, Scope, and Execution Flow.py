def hello():
    print("Hello")

print("start")
hello()
print("end")

def age_in_seconds(age):
    result = int(age) *365 *24 *60 *60
    return result

print(age_in_seconds(input("whats your age? ")))