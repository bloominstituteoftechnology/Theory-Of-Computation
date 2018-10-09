import re  # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
regex = '\(?([0-9]{3})\)?[-\s]?([0-9]{3})[-\s]?([0-9]{4})'

while line != "exit":
    # TODO Find matches
    match = re.search(regex, line)

    # TODO If no match found, print that no number was found
    if not match:
        print("No number was found!")
    # TODO Else, break number up into area code, prefix, and suffic
    else:
        print(
            f"\nArea: {match[1]}\nPrefix: {match[2]}\nSuffix: {match[3]}\n")
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!

    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")
