days = input("Enter a number : ")
if(days.isnumeric()):
    days = int(days)
    print("seconds = ",days*24*60*60) 
else:
    print("invalid number")