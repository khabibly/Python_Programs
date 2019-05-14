no = "n"
yes = "y"
def fib():
    while True:
        
        ask = int(input("How many times would you like see to the fibonacci to spiral? "))
        num = 1
        mun = 0
        for i in range(ask):
            time = i + 1
            print("The number in sqeuence spot " + str(time) + " is: " + str(mun))
            num = num + mun
            mun = num - mun
        ask2 = input("Would you like to get restart this program? (yes/no)")
        if ask2 == "no":
            print("Have a nice day! ☻")
            break
        elif ask2 == "yes":
            continue
        else:
            print("You must enter a valid response! ")
            ask2 = input("Would you like to get restart this program? (yes/no)")
            continue
            
fib()
"""
no = "n"
yes = "y"
def fib():
    while True:
        
        ask = int(input("How many times would you like see to the fibonacci to spiral? "))
        yeet = ask.isnumeric()
        while yeet == False:
            ask = int(input("How many times would you like see to the fibonacci to spiral? "))
            yeet = ask.isnumeric()
        num = 1
        mun = 0
        for i in range(ask):
            time = i + 1
            print("The number in sqeuence spot " + str(time) + " is: " + str(mun))
            num = num + mun
            mun = num - mun
        ask2 = input("Would you like to get restart this program? (yes/no)")
        if ask2 == "no":
            print("Have a nice day! ☻")
            break
        elif ask2 == "yes":
            continue
        else:
            print("You must enter a valid response! ")
            continue
            
fib()

"""
