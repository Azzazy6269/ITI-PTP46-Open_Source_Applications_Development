attempts =0
while(True):
    pin = input("PIN : ")
    attempts +=1
    if(pin=="4321"):
        if(attempts==1):
            print("Correct! it took you only 1 single time")
            break
        print("Correct! it took you ",attempts," attempts")
        break
    else: 
        print("wrong")
