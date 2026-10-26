# #1
# names = ["Alice", "Bob", "Charlie"]
# for index, name in enumerate(names,1):
#     print(f"{index}. {name}")

# #2
# servers = ["app-01", "app-02", "app-03"]
# for index, name in enumerate(servers,1):
#     print(f"{index}. {name}")
    
# #3
# errors = ["disk full", "timeout", "connection lost"]
# for index, name in enumerate(errors,1):
#     if index % 2 == 0:
#       print(f"{index}. {name}")

#4
# ports = [22, 80, 443, 8080]
# for index, port in enumerate(ports):
#     if index > 1:
#         print(port)

#5
# users = ["admin", "dev", "ops"]
# for i, name in enumerate(users):
#     print(f"User #{1}: {name}")

#6
# files = ["log1.txt", "log2.txt", "log3.txt"]
# for i,file in enumerate(files,1):
#     if i == len(files):
#         print(file)

#7
# regions = ["us-east-1", "eu-west-1", "ap-south-1"]
# for i, region in enumerate(regions):
#     if i != 0:
#         print(region)

#8
# services = ["nginx", "redis", "postgres"]
# for i, service in enumerate(services,1):
#     print(f"#{i}. {service}")

#9
# tasks = ["backup", "cleanup", "monitoring"]
# for index, task in enumerate(tasks,1):
#     if index % 2 == 1:
#       print(f"{index}. {task}")

#10
# containers = ["c1", "c2", "c3", "c4"]
# for i, container in enumerate(containers):
#     if i == 2:
#         break
#     print(container)

#11
# hosts = ["host1", "host2", "host3"]
# ips = ["10.0.0.1", "10.0.0.2", "10.0.0.3"]

# for host, ip in zip(hosts,ips):
#     print(f"{host} - {ip}")

#12
# users = ["alice", "bob", "charlie"]
# ids = [101, 102, 103]
# for user, id in zip(users,ids):
#      print(f"User {user} has ID {id}")

#13
# services = ["nginx", "redis", "postgres"]
# ports = [80, 6379, 5432]
# for service, port in zip(services,ports):
#     print(f"{service} - {port}")

#14
# regions = ["us-east-1", "eu-west-1"]
# zones = ["a", "b"]
# for region, zone in zip(regions,zones):
#     print(region+zone)

#15
# containers = ["c1", "c2", "c3"]
# statuses = ["running", "stopped", "paused"]
# for container, status in zip(containers,statuses):
#     if status == "running":
#         print(container)

#16
# files = ["file1", "file2"]
# sizes = [100, 200]
# types = ["txt", "log"]
# for file, size, type in zip(files, sizes, types):
#     print(f"The file {file},")

#17
# names = ["serviceA", "serviceB", "serviceC"]
# versions = ["1.0", "2.0"]
# for name, version in zip(names,versions):
#     print(f"{name} - {version}")

# #18
# dbs = ["mysql", "postgres", "mongo"]
# ports = [3306, 5432, 27017]
# hosts = ["db1", "db2", "db3"]

# for db, port, host in zip(dbs,ports,hosts):
#     print(f"Acssesing {db} from port {port}, by {host}")

# #19 
# tasks = ["build", "test", "deploy"]
# durations = [5, 10, 3]
# statuses = ["ok", "ok", "failed"]

# for task, status in zip(tasks,statuses):
#     if status == "failed":
#         print(f"{task} has failed")

# #20
# users = ["admin", "dev"]
# roles = ["full-access", "read-only"]
# regions = ["us", "eu"]

# for user, role, region in zip(users,roles,regions):
#     print(f"The {role} user named {user} is from the {region}")