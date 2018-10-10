import re  # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# Define your regex
regex = r'^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$'

while line != "exit":
    #  Find matches
    matches = re.match(regex, line)
    # If no match found, print that no number was found
    if matches is None:
        print("No number was found")
    # Else, break number up into area code, prefix, and suffic
    else:
        digits = "".join(re.findall(r'\d', line))
        phone = format(
            int(digits[:-1]), ",").replace(",", "-") + digits[-1]
        print(phone)
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!

    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")
