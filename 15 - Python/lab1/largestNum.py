num1 = input("Enter num1 : ")
num2 = input("Enter num2 : ")
num3 = input("Enter num3 : ")

if(num1.isnumeric() and num2.isnumeric() and num3.isnumeric()):
    num1 = int(num1)
    num2 = int(num2)
    num3 = int(num3)
    if(num1>num2 and num1>num2): print(num1," is the largest")
    elif(num2>num1 and num2>num3):print(num2," is the largest")
    else:print(num3," is the largest")
else:
    print("invalid numbers")