list = [1,2,3,4,5,6,7,8,9,10]

print("first element = ",list[0])
print("last element = ",list[9])

list.reverse()
print(list)

sum = 0
for num in list:
    sum+=num

print("sum = ",sum)