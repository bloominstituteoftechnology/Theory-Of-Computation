import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")
# TODO Define your regex
phone_ex = r"[(]?[\d]{3}[)|\s|-]?[\d]{3}[-|\s]?[\d]{4}"

while line != "exit":
    phone_num = ""
    # TODO Find matches
    matches = re.match(phone_ex, line)
    # TODO If no match found, print that no number was found
    # TODO Else, break number up into area code, prefix, and suffic
    if not matches:
        print(f"No Number was found")
    else:
        for entry in matches.group():
            try:
                if int(entry) or entry == "0":
                    phone_num += entry
            except ValueError:
                phone_num
        print(f"\nArea Code: {phone_num[:3]}")
        print(f"Prefix: {phone_num[3:6]}")
        print(f"Suffic: {phone_num[6:]}")

    
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")