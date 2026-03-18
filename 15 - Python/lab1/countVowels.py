text = input("Enter text : ")
vowels = ["a", "e", "i", "o", "u"]
counter =0

for i in range(len(text)):
    if text[i].lower() in vowels :
        counter+=1

print("number of vowles = ",counter)