import random

words = ["eggplant", "guess", "hangman", "apple", "computer", "project", "headphones"]


def get_guess():
    while True:
        print (str(guesses_left) + " incorrect guesses left.")
        guess = input("Guess: ")
        if len(guess) != 1:
            print("Your guess must have exactly one character!")
        elif not guess.islower():
            print"Your guess must be a lowercase letter!"
        else:
            return guess
            
def update_dashes(word, dashes, guess):
    for i in range(len(word)):
        if word[i] == guess:
            dashes = dashes[:i] + guess + dashes[i + 1:]
    return dashes
        
secret_word = random.choice(words)
dashes = "-" * len(secret_word)
    
guesses_left = 10

while True:
    print dashes
    
    guess = get_guess()
    dashes = update_dashes(secret_word, dashes, guess)
    if guess in secret_word:
        print("That letter is in the secret word! ")
    else:
        print("That letter is not in the secret word!")
        guesses_left = guesses_left -1
    if guesses_left == -1 and guess not in secret_word:
        print("You lose the word was: " + secret_word)
        break
    if dashes == secret_word:
        print("Congrats! You win. The word was: " + secret_word)
        break
