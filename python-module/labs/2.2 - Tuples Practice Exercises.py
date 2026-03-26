host_port = ("123.0.0.1",3000)
print(host_port)
print(type(host_port))
print(host_port[0])
print(host_port[1])

red_rgb = (255,0,0)
print(red_rgb[0])

single_value = ("hello")
print(type(single_value))
single_value = ("hello",)
print(type(single_value))

print(host_port[:1])
print(host_port[-2:])

# host_port[1] = 2000
service_endpoint = ("auth.server.dev.local",80)
print(f"{service_endpoint[0]}\n{service_endpoint[1]}")
# service_endpoint[1] = 433

version = (5,1,2)
print(version[:2])
