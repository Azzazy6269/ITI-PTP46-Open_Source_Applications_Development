students= {
    "ahmed" : [80,85,92],
    "osama" : [90,98,99],
    "Ibrahim" : [70,65,71]
}

averages = {}

for key in students:
    sum =0
    for grade in students[key]:
        sum += grade
    averages[key] = sum/len(students[key])

highestAvg = ("",0)
for key in averages:
    if(averages[key]>highestAvg[1]) : highestAvg = (key,averages[key])

print(highestAvg)