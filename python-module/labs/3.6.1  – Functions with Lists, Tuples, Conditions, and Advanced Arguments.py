def to_tuple(list: list):
    summery = sum(list)
    length = len(list)
    avrage = summery/length
    return tuple(summery,length,avrage)

def min_max(numbers: list):
    return tuple(min(numbers),max(numbers))

def even_up(numbers: list):
    numbers.sort()
    # new_numbers= numbers.sorted()
    
    return tuple(n for n in numbers if n % 2 == 0)

print(even_up([1,3,5,7,42345,6,74,1,46,78,4,21,3,88]))
