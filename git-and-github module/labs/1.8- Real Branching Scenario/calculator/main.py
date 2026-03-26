from operations import add

def main():
    print("=== Feature A ===")
    result = add(5, 5)
    print("Result A:", result)
    print("*** Feature B ***")
    result = add(10, 2)
    print("Result B:", result)

if __name__ == "__main__":
    main()