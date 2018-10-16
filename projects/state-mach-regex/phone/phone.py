import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
# phoneRegex = '\+?([\d]{0,3})[-\s\(]?(\d{3})[\)\s\-]?\(?(\d{3})\s?\-?\)?\(?(\d{4})\)?'   # including parentheses
phoneRegex = '\+?([\d]{0,3})[-\s\(]?(\d{3})[\)\s\-]?\(?(\d{3})[\s\-\)]?\(?(\d{4})\)?'   # including parentheses

while line != "exit":
    # TODO Find matches
    match = re.search(phoneRegex, line)
# regex.search(string[, pos[, endpos]])
# Scan through string looking for a location where this regular expression 
# produces a match, and return a corresponding match object.
    
    # TODO If no match found, print that no number was found
   
   if match is None:
       print("No number was found\n")
    
    # TODO Else, break number up into area code, prefix, and suffic
    else:
        print('Country code: %s Area code: %s  Prefix: %s  Suffix: %s ' % (match[1], match[2], match[3], match[4]))
    
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")