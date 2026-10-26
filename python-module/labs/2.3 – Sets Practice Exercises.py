ports_list = [
    8080,
    8443,
    22,
    8080,
    443
]
unique_ports = set(ports_list)
print(unique_ports)

servers_names = {"web01", "web02", "web03"}
if 22 in unique_ports:
    print("22 exists")
    
print(22 in servers_names)

unique_ports.add(3000)
print(unique_ports)
unique_ports.remove(22)
# unique_ports.remove(22)
unique_ports.discard(22)

valid_set = {(1,2),(3,4)}
# valid_set = {[1,2],[3,4]}

dupe_list = ["David","David","David","Snir"]
print(set(dupe_list))