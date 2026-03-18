text = input("Enter text: ")
vowels = ["a", "e", "i", "o", "u"]
finalText = ""
lastVowel = -1  

for i in range(len(text)):
    if text[i].lower() in vowels:
        if lastVowel != -1:
            finalText += text[lastVowel + 1:i]
        else :
            finalText += text[0:i]
        lastVowel = i
if text[len(text)-1] not in vowels:
    finalText += text[lastVowel + 1:len(text)]

print("Result:", finalText)