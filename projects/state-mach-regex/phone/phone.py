import re  # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
reg = '^[0-9]{3}[-.)( ]*[0-9]{3}[-.)( ]*[0-9]{4}$'

while line != "exit":
    # TODO Find matches
    match = re.search(reg, line)

    # TODO If no match found, print that no number was found
    if match is None:
       print('No number found')
   
    
    # TODO Else, break number up into area code, prefix, and suffic
    else:
        l = list(match.string)
        for i in l:
            if i is '-':
                l.remove(i)
        print("Area code is {}{}{}".format(l[0],l[1],l[2]))
        print("Prefix is {}{}{}".format(l[3],l[4],l[5]))
        print("Suffix is {}{}{}{}".format(l[6],l[7],l[8],l[9]))
    
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")
