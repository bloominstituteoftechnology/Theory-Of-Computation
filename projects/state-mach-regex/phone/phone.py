import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# Define your regex
regex = '\+?([\d]{0,3})[-\s]?\(?(\d{3})\)?\s?\-?(\d{3})\s?\-?(\d{4})'

while line != "exit":
    # !!!! IMPLEMENT ME

    # Find matches
    matches = re.search( regex, line )
    
    # If no match found, print that no number was found
    if not matches:
        print( 'Not a valid phone number :(' )
    
    # Else, break number up into area code, prefix, and suffic
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    else:
        print('Country code: %s \t Area code: %s \t Prefix: %s \t Suffix: %s' % (matches[1], matches[2], matches[3], matches[4]) )
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")