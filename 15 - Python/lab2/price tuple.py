prices =(140,152,130,147,141,162,144)

highest = prices[0]
lowest = prices[0]
sum =0
for price in prices:
    if(price>highest):highest=price
    if(price<lowest):lowest=price
    sum += price

print("highest = ",highest)
print("lowest = ",lowest)
print("avg = ",sum/len(prices))
