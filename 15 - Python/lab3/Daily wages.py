def calculate(hourlyWorked,hourlyWage,day):
    if(day=="sunday"):
        return hourlyWage*hourlyWorked*2
    else:
        return hourlyWorked*hourlyWage
    

hourlyWorked = int(input("Enter hourly Worked : "))
hourlyWage = int(input("Enter hourly Wage : "))
day = input("Enter day : ")

print(calculate(hourlyWorked,hourlyWage,day))
