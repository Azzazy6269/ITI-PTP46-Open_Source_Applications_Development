def reverse(text):
    stack = []
    reverseText =""

    for ch in text:
        stack.append(ch)

    while(len(stack)>0):
        reverseText += stack.pop()

    return reverseText


text = input("Enter a text : ")
print(reverse(text))