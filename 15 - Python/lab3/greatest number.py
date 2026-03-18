def greatestNum1(num1,num2,num3):
    if(num1>num2 and num1>num3): print(num1," is the greatest number")
    elif(num2>num1 and num2>num3):print(num2," is the greatest number")
    else:print(num3," is the greatest number")

def greatestNum2(num1,num2,num3):
    greatest = num1
    if(greatest < num2) : greatest = num2
    if(greatest < num3) : greatest = num3
    print(greatest," is the greatest number")


num1 = input("Enter num1 : ")
num2 = input("Enter num2 : ")
num3 = input("Enter num3 : ")

if(num1.isnumeric() and num2.isnumeric() and num3.isnumeric()):
    num1 = int(num1)
    num2 = int(num2)
    num3 = int(num3)
    greatestNum1(num1,num2,num3)
    greatestNum2(num1,num2,num3)

else:
    print("invalid numbers")