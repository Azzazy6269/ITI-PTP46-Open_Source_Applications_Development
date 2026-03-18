fruits =("guava","apple","banana","mango","watermelon")
print("first : " ,fruits[0])
print("last : " ,fruits[4])

firstThreeFruits = fruits[0:3]
print(firstThreeFruits)

print("occurance of mango",fruits.count("mango"))

try:
    fruits[1] = "pineapple"
except TypeError:
    print("Error: Tuples cannot be modified.")