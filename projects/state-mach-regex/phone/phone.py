import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex


while line != "exit":

    x = r"^[\(]*\d{3}[\) -]*\d{3}[- ]*\d{4}$"
    matchs = re.match(x, line)
    if matchs is None:
        print("no match found")
    else:
        # TODO Else, break number up into area code, prefix, and suffic
        numbers = [n for n in matchs.group() if n.isnumeric()]
        area_code = numbers[:3]
        prefix = numbers[3:6]
        suffix = numbers[6:10]
        print(f" Area code: {''.join(area_code)}\n Prefix: {''.join(prefix)}\n Suffix: {''.join((suffix))}\n")


        # As a stretch goal, you can modify your regex to search for country codes
        # too and print that out as well!

        # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")