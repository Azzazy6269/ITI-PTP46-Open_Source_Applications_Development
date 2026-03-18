def sum_series(n):
    sign = -1
    result= 0
    for i in range(1,n+1):
        sign *= -1
        result += i*sign
    return result


n = input("enter number : ")
if(n.isnumeric()):
    print(sum_series(int(n)))
else:
    print("invalid number")
    