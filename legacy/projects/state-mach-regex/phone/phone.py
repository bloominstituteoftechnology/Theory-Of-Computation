import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
phone = input("Enter a phone number to validate or 'exit' when done. ")
# TODO Define your regex

dashed_regex = r"[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}"

numbers_only = r"[0-9]{10}"

numbers_only_matches = re.findall(numbers_only, phone, flags=0)

matches = re.findall(dashed_regex, phone, flags=0)

while phone != "exit":
    # TODO Find matches

    if matches:
        print('valid phone number')
        break
   
# TODO If no match found, print that no number was found

    elif numbers_only_matches:
        print(re.sub(r'(\d{3})(\d{3})(\d{4})', r'(\1)\2-\3', phone))
        break
        

 # TODO Else, break number up into area code, prefix, and suffic

    else:
        print('invaid phone number')
        break
        


    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")