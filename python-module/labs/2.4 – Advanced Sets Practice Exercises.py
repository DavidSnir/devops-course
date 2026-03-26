# set([1,2],[3,4])
# set({1,2},{3,4})

set_of_tupels = {(1,2),(3,4)}
print(f"{(1,2) in set_of_tupels}\n{(3,4) in set_of_tupels}")

developers = {"Alice", "Bob", "Charlie"}
admins = {"Alice", "David"}

print(f"Alice is in developers: {"Alice" in developers}")
print(f"Alice is in admins: {"Alice" in admins}")

print(developers.union(admins))
print(developers | admins)

print(developers.intersection(admins))
print(developers & admins)

print(developers.difference(admins))
print(developers - admins)

developers.intersection_update(admins)
print(developers)
print(developers.intersection(admins))