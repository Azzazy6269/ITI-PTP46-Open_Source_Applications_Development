cart = {
    "mug" : 25,
    "notebook" : 20,
    "nescafe gold" : 100
}

cart["wallet"] = 250

total =0
for value in cart.values():
    total += value

print(total)