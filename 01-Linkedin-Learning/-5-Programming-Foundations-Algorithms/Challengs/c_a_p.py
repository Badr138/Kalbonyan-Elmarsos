# Find the greatest common denominator of two numbers
# Using Euclid's algorithm


def gcd(a, b):
    while (b != 0):
        t = a
        a = b
        b = t % b

    return a

# try out the function with a few exaples
print(gcd(60, 96))  # Should  be 12
print(gcd(20, 8))  # Should  be 4