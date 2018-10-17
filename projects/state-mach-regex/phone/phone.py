import re  # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
regex = r""


while line != "exit":
    # TODO Find matches
    match = re.match(regex, line)

    # TODO If no match found, print that no number was found
    if match is None:
        print("No match found\n")
    else:
        # TODO Else, break number up into area code, prefix, and suffic
        nums = [i for i in match.group() if i.isnumeric()]
        area_code = nums[:3]
        prefix = nums[3:6]
        suffix = nums[6:]
        print(
            f"area code: {''.join(area_code)}\n prefix: {''.join(prefix)}\n suffix: {''.join(suffix)}\n ")

    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!

    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")
