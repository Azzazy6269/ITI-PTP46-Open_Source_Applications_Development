def pyramid (num):
    for n in range(num+1):
        line=""
        while(n>0):
            line += "*"
            n -= 1
        print(line)

num = input("Enter a number : ")
if(num.isnumeric()):
    pyramid(int(num))
else:
    print("invalid number")