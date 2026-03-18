
while(True):
    try:
        name = input("name : ")
        if(name.isalpha()):
            break
        else:
            raise ValueError("name should contains characters only")
    except Exception as ex:
        print(ex)


while(True):
    try:
        age = input("age : ")
        if(age.isnumeric()):
            age = int(age)
            if(age<20):
                raise ValueError("age should be at least 20")
            break
        else:
            raise TypeError("age should be int")
    except Exception as ex :
        print(ex)


while(True):
    try:
        email = input("email : ")
        if(email.endswith("@gmail.com")):
            break
        else:
            raise ValueError("email must be in format example@gmail.com")
    except Exception as ex:
        print(ex)


while(True):
    try:
        track = input("track : ")
        if(track.isalpha()):
            break
        else:
            raise ValueError("track should contains characters only")
    except Exception as ex:
        print(ex)


try:
    file = open("./users.txt" , "w")
    file.write(f"{name.upper()}\n{age}\n{email.upper()}\n{track.upper()}\n=====================\n")
    print("Data Added Successfully")
except Exception as ex:
    print(ex)
finally:
    file.close()

