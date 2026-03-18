import math
raduis = input("Enter raduis : ")
if(raduis.isnumeric()):
    raduis = float(raduis)
    volume = (4/3)*math.pi*math.pow(raduis,3)
    print("volume = ",volume)
else:
    print("invalid raduis")