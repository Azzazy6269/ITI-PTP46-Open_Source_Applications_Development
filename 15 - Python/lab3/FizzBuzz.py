def fizzBuzz(num):
    if(num%3==0 and num%5==0): return "FizzBuzz"
    elif(num%3==0):return "Fizz"
    elif(num%5==0):return "Buzz"

num = input("Enter number to test : ")
if(num.isnumeric()):
    print(fizzBuzz(int(num)))
else:
    print("invalid number")