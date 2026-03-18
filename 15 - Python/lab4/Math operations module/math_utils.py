def add(num1,num2):
    return num1+num2

def subatract(num1,num2):
    return num1-num2

def multiply(num1,num2):
    return num1*num2

def divide(num1,num2):
    try:
        return num1/num2
    except ZeroDivisionError as error:
        print("Zero Division Error")

