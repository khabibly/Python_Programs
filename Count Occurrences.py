#This function counts how many times a letter has appeared in a string using parameters.
def count_occurrences(my_string, let):
    num = 0
    for letter in my_string:
        
        if letter == let:
            num += 1
        
    print("Your letter appeared: " + str(num) + " times!")
    return
count_occurrences("apple", "p")
count_occurrences("Hello World!", "e")
