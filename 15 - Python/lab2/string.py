text = input("Enter a string : ")
text = text.upper()
print(text)

vowels = ["a", "e", "i", "o", "u"]
counter =0
for i in range(len(text)):
    if text[i].lower() in vowels :
        counter+=1
print("number of vowles = ",counter)

reversedText = text[::-1]
print("reversed text : ",reversedText)

if(text == reversedText):print("palinrome text")
else:print("not a palindrome text")