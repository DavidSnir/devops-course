def dispatcher(operator,x,y):
    match operator[0].lower():
        case "a":
            return add(x,y)
        case "s":
            return subtract(x,y)
        case "m":
            return multiply(x,y)
        case "d":
            return devide(x,y)
        case "p":
            return power(x,y)
        case _:
            print("[Error] operation input needed")
            return None
        


def add(x,y):
    return (x+y)

def subtract(x,y):
    return (x-y)

def multiply(x,y):
    return (x*y)

def devide(x,y):
    if y == 0:
        print("[Error] can't devide by 0")
        return None
    else:
        return (x/y)
    
def power(x,y):
    return (pow(x,y))