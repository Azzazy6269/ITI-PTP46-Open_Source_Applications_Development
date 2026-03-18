visitors=set()

visitors.add("Essam")
visitors.add("Ibrahim")
visitors.add("Nada")

if "Essam" in visitors : print("Essam is visitors")
else: print("Essam isn't in visitors")

visitors.discard("Essam")

print(visitors)