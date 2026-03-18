import math_utils as mu

num1 = input("Enter num1 : ")
num2 = input("Enter num2 : ")

if(num1.isnumeric() and num2.isnumeric()):
    num1=int(num1)
    num2=int(num2)

    print(mu.add(num1,num2))
    print(mu.subatract(num1,num2))
    print(mu.multiply(num1,num2))
    print(mu.divide(num1,num2))

else:
    print("invalid numbers")

