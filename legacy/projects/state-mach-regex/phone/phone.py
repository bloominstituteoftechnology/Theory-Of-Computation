import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
# const phoneRegex = ^\+?\d{0,3}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}?


while line != "exit":
    # TODO Find matches
    # for line in lines:
    #     line = str(line)

    #     if phoneRegex.match(line)
    #     print(line)
    # for _ in range(int(input())):
    for l in line:
        # line = input()
        if re.match(r"^\+?\d{0,3}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}?", line):
            print("YES")
        else:
            print("No number was found")

    
    # TODO If no match found, print that no number was found
        # if not match:
        #     print("No number was found")
   
    
    # TODO Else, break number up into area code, prefix, and suffic
        

    
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")