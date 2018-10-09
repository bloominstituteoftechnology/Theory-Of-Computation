import re  # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
"""
\(       # Match a literal "("
  ?      #   between zero and one time.
(        # Capture the enclosed match to backreference 1:
  [0-9]  #   Match a digit
    {3}  #     exactly three times.
)        # End capturing group 1.
\)       # Match a literal ")"
  ?      #   between zero and one time.
[- ]    # Match one hyphen or space
  ?      #   between zero and one time.
⋯       # [Match the remaining digits and separator.]
"""
regex = '\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})'

while line != "exit":
    # TODO Find matches
    matches = re.match(regex, line)

    # TODO If no match found, print that no number was found
    if matches == None:
        print("No number found")

    # TODO Else, break number up into area code, prefix, and suffic
    else:
        print(f'Area code: {matches.group(1)}')
        print(f'Prefix: {matches.group(2)}')
        print(f'Suffix: {matches.group(3)}')

    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!

    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")
