while(True):
    path = input("path : ")
    try:
        file = open(path, "r")
        print(file.read())
        file.close()
    except Exception:
        print("Error: File not found. Please check the filename.")
        