from operations import dispatcher

print(dispatcher("add", 5,3))
print(dispatcher("sub", 10,4))
print(dispatcher("mul", 6,2))
print(dispatcher("div", 8,2))
print(dispatcher("div", 8,0))
print(dispatcher("pow",2,22))