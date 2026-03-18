def add(num1,num2):
    return num1+num2

def substract(num1,num2):
    return num1-num2

def divide(num1,num2):
    return num1/num2

def multiply(num1,num2):
    return num1*num2

num1 = input("Enter num1 : ")
num2 = input("Enter num2 : ")
op = input("Enter operation (1-add / 2-substarction / 3-division / 4-multipication) : ")

if(num1.isnumeric() and num2.isnumeric()):
    num1 = int(num1)
    num2 = int(num2)
    op = int(op)
    if(op == 1) : print(add(num1,num2))
    elif(op == 2) : print(substract(num1,num2))
    elif(op == 3) : print(divide(num1,num2))
    elif(op == 4) : print(multiply(num1,num2))
    else : print("invalid operations")
else:
    print("invalid inputs")



