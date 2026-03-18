p = input("Enter P : ")
r = input("Enter R : ")
t = input("Enter T : ")

if(p.isnumeric() and r.isnumeric() and t.isnumeric()):
    p = int(p)
    r = int(r)
    t = int(t)
    si = (p*r*t)/100
    print("SI = ",si)
else:
    print("invalid numbers")