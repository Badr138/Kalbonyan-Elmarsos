primaryColors = frozenset(["red", "blue", "yellow"])

color = "green"

if color.lower() in primaryColors:
    print(color + "is a primaryColors")
else:
    print(color + "is not a primaryColors")

letters = set(['a', 'b'])
letters.add('c')
print(letters)