print(6==7)
print(6>7)
print(6<7)
print(7>=7)
print(7!=7)

c = 7==7
print(c)

c = 7!=7
print(c)

list_a = ["banana","cucumber"]
list_b = ["banana","cucumber"]
print(f"Lists: {list_a==list_b}")
print(f"Lists: {list_a is list_b}")
list_b = list_a
print(f"Lists: {list_a is list_b}")
