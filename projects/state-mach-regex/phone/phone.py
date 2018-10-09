import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. \n")

# TODO Define your regex
regex = r'([0-9]\d{2}).*(\d{3}).*(\d{4})$'

while line != "exit":
    # TODO Find matches
    match = re.search(regex, line)
    
    # TODO If no match found, print that no number was found
    if match == None:
        print('No number was found')
    # print(f'{match}')
   
    
    # TODO Else, break number up into area code, prefix, and suffic
    else:
        print(f'Area code: {match.group(1)}')
        print(f'Prefix: {match.group(2)}')
        print(f'Suffix: {match.group(3)}\n')
    
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. \n")