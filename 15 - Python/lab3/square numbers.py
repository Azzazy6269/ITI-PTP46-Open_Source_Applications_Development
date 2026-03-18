squares = {
    1 : 1,
    2 : 4,
    3 : 9,
    4 : 16,
    5 : 25
}

for key in squares:
    print(key, " : " , squares[key])

squares[6] = 36

if(4 in squares):print("4 is exist")
else:print("4 isn't exist")
