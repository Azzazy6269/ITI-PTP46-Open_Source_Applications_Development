num = input("Enter a number : ")
isprime =True
if(num.isnumeric()):
    num = int(num)
    for i in range(2,num):
        if(num%i==0):
            isprime=False
            break
    if(isprime):print("prime number")
    else:print("not a prime number")
else:
    print("invalid number")


