from math_utils import add


num1 = input("Enter num1 : ")
num2 = input("Enter num2 : ")

if(num1.isnumeric() and num2.isnumeric()):
    num1=int(num1)
    num2=int(num2)

    print(add(num1,num2))

else:
    print("invalid numbers")

