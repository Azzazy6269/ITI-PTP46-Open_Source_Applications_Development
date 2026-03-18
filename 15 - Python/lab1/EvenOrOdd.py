num = input("Enter a number : ")
if(num.isnumeric()):
    num = int(num)
    if(num%2 == 0): print("even")
    else : print("odd")
else:
    print("invalid number")