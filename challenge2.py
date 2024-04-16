number = float(input("Enter a number: "))
if not number>0:
    print("error")
else:
    number2 = int(number)
    for i in range(5, number2, -1):
        print(i)
        if i == 1:
            print("Yippeeee")


