#Greets the user
print("Welcome to the Future Value Calculator! ")
print("=======================================================================")
print(" ")

#"J" calculates the amount of times the user has used this calculator and if tells them.
#For example, if the user uses this calculator 3 times, it will tell them that they used it 3 times and say thank you for using this calculator.
j = 1

#main code, it only ends when the user says "yes" at the end when asked if they are done using te future value calculator
while True:
    #user input information
    year = float(input("How many years would you like to invest? :"))
    interest_rate = float(input("What is your yearly interest rate? (Percent) :"))
    monthly_investment = int(input("How much would you like to invest per month? :"))
    #Converts years into months
    month = int(year * 12)
    month = month + 1
    #Converts yearly interest rate to yearly interest rate then into a decimal rate
    monthly_interest = ((interest_rate / 12) / 100) + 1
    #tells them their monthly interest rate as a decimal
    print("=======================================================================")
    print ("Your monthly interest rate is: ")
    print (float(monthly_interest))
    print("=======================================================================")
    #initialize total as 0
    total = 0
    for i in range(1, month):
        total = monthly_investment + total
        total = total * monthly_interest
        total = round(total, 2)
        print ("Your total for month " + str(i) + " is: $" + str(total))
        
    print("Final Total: $" + str(total))
    
    #Gives the user an opportunity to calculate their future values again
    ask = input("Are you finished?(yes/no) ")
    print(" ")

    if ask == "yes":
        #If they say they are finished, say goodbye to them.
        print("Thank you for using Future Value Calculator " + str(j) + " time(s)! Have a nice day! ")
        break
    else:
        #adds 1 to "j" so it calculates the amount of times the user has used this function, then welcomes them again
        j = j + 1
        print("=======================================================================")
        print("Welcome again, you have used this " + str(j) + " times!")
        print("=======================================================================")
        continue
