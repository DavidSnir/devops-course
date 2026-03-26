def process_data_guarded(msg=None):
    if msg is None:
        print("forget the argument")
    elif type(msg) == list:
        print("hi")
        print(f"the length is {len(msg)}")

    else:
        print("wrong type")
process_data_guarded([])
process_data_guarded([1,2,3])
process_data_guarded()