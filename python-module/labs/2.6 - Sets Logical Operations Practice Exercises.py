friends = {"Bob", "Rolf", "Anne"}
abroad = {"Bob", "Anne"}
print(f"Friends: {friends}\nAbroad: {abroad}")

print(f"Friends who arrent abroad: {friends - abroad}")
print(f"Abroad who arent friends: {abroad - friends}")

friends = set()
local = {"Rolf"}
abroad = {"Bob", "Anne"}

friends = local | abroad
print(f"all my friends: {friends}")

art = {"Bob", "Jen", "Rolf", "Charlie"}
science = {"Bob", "Jen", "Adam", "Anne"}

print(f"who is in art and scince class? {art & science}")