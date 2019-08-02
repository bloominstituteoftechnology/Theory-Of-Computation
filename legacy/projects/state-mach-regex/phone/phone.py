import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
phone = input("Enter a phone number to validate or 'exit' when done. ")
# TODO Define your regex

dashed_regex = r"[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}"

matches = re.finditer(dashed_regex, phone, flags=0)

while phone != "exit":
    # TODO Find matches

    if matches:
        print('valid phone number')
   
# TODO If no match found, print that no number was found

    else:
        print('invaid phone number')

 # TODO Else, break number up into area code, prefix, and suffic
    
    
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")