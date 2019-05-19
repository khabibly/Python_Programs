def word_counter():
    num = 0
    word = input("Enter in the word you would like to find in the string of text: ")
    leng = len(word)
    text = input("Enter in some text: ")
    while True:
        index = text.find(word)
        if index == -1:
            return num
        else:
            text = text[:index] + text[index + leng:]
            num = num + 1

print(word_counter())
