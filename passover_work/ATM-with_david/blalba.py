from models import Account

rotems_account = Account("Rotem",1000000,101)
davids_account = Account("David", 100000,102)

rotem_pin = rotems_account.pin
david_pin = davids_account.pin

print(f"Rotem: {rotem_pin}\nDavid: {david_pin}")
