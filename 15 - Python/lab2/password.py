passwords = {"123456","123456789", "12345", "12345678", "qwerty"}

password = input("Enter your password : ")

if password in passwords:
    print("valid password")
else:
    print("invalid password")
