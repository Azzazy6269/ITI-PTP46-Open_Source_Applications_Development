c = input("Enter a number : ")
if(c.isnumeric()):
    c = int(c)
    f = (9/5)*c +32
    print(c,":",f)
else:
    print("invalid number")