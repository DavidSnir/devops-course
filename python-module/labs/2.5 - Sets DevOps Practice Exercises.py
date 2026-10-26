required_packages = {"python3", "pip", "requests", "boto3", "pip"}
print(required_packages)
print(f"Request exist? {"requests" in required_packages}")
print(f"ansible exist? {"ansible" in required_packages}")

required_packages.add("paramiko")
required_packages.discard("pip")
print(required_packages)

installed_packages = {"docker", "python3", "pip"}
missing_packages = required_packages - installed_packages
extra_packages = installed_packages - required_packages
common_packages = required_packages & installed_packages

print(f"Package Manager\nMissing: {missing_packages}\nExtra: {extra_packages}\nCommon: {common_packages}")