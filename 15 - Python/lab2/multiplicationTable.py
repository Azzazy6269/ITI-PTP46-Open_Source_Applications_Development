def table(num):
    for n in range(13):
        print(num," * ",n," = ",num*n)


num = input("Enter a number : ")
if(num.isnumeric()):
    table(int(num))
else:
    print("invalid number")