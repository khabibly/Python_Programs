#Fun little program to have a base word and change the word into another word by changing each letter at a specific index.
def word_ladder():
    word = input("Enter a word: ")
    initial_word = word
    index = int(input("Enter an index (-1 to quit): "))
    leng_of_word = len(word)
    max_index = leng_of_word -1
    while index != -1:
        while index < -1:
            print("Invalid index (Too low)")
            index = int(input("Enter an index: "))
        while index > max_index:
            print("Invalid index (Too high)")
            index = int(input("Enter an index: "))
        letter = input("Enter a letter: ")
        cap = letter.islower()
        leng_of_letter = len(letter)
        if leng_of_letter != 1:
            print("Must be exactly one character!")
        elif cap == False:
            print("Character must be a lowercase letter!")
        else:
            word = word[:index] + letter + word[index + 1:]
            print(word)
            index = int(input("Enter an index (-1 to quit): "))
            while index > max_index:
                print("Invalid index")
                index = int(input("Enter an index (-1 to quit): "))
    print(" ")
    print("Initial word: " + initial_word)
    print("Final word: " + word)
word_ladder()
