employees = [
    {
        "name" : "ahmed",
        "age" : 35,
        "department" : "frontend"
    },
    {
        "name" : "osama",
        "age" : 30,
        "department" : "frontend"
    },
    {
        "name" : "ibrahim",
        "age" : 46,
        "department" : "AI"
    },
]

totalAge=0
avgAge=0
frontend_developers =[]

for employee in employees:
    if(employee["department"]=="frontend"): frontend_developers.append(employee)
    totalAge += employee["age"]

avgAge = totalAge/len(employees)

print("Avg age = ",avgAge)
print(frontend_developers)