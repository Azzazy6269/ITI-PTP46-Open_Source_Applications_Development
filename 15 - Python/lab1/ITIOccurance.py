text = input("Enter text : ")
counter =0
for i in range(len(text)):
    if(i<len(text)-2 and text[i].lower()=="i" and text[i+1].lower()=="t" and text[i+2].lower()=="i"):
        counter+=1

print("iti was repeated ",counter," times")