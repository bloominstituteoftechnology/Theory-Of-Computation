import re  # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
regex = r"^\(?[0-9]{3}[\) -][0-9]{3}[0-9]{4}$"

while line != "exit":
    # TODO Find matches
    match = re.match(regex, line)

    # TODO If no match found, print that no number was found
    if match is None:
        print("No match found\n")
    else:
        # TODO Else, break number up into area code, prefix, and suffic
        nums = [i for i in match.group() if i.isnumeric()]
        print(
            f"Area Code: {nums[:3].join('')}\nPrefix: {nums[3:6].join('')}\nSuffix: {nums[6:].join('')}")

    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!

    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")
