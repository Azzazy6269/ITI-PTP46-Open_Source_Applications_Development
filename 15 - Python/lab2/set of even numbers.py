evens = {1,3,5,7,9}
evens.add(11)
evens.discard(7)

if 5 in evens : print("5 is exist")
else:print("5 isn't exist")

nums = evens.union({1,15,17,19})
print(nums)