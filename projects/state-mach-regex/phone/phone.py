import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
regex = re.compile('\(?([\d]{3})\)?[ -.]?([\d]{3})[ -.]?([\d]{4})')

while line != "exit":
    # TODO Find matches
    matches = re.findall(regex, line)
    
    # TODO If no match found, print that no number was found
    if(len(matches) < 1):
       print("No matches found")
   
    
    # TODO Else, break number up into area code, prefix, and suffic
    else:
        area_code = matches[0][0]
        prefix = matches[0][1]
        suffix = matches[0][2]

    print(f"Area Code: {area_code}\nPrefix: {prefix}\nSuffix: {suffix}")
    
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")