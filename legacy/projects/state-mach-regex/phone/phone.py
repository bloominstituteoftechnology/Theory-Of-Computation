import re  # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# Define your regex
phone_regex = r'([(]*[0-9]{3}[)]*)[-\s]?([0-9]{3})[-\s]?([0-9]*)'

while line != "exit":
    # Find matches
    phone_numbers = re.findall(phone_regex, line)

    # If no match found, print that no number was found
    if not phone_numbers:
        print('Phone number not valid')

    # Else, break number up into area code, prefix, and suffic
    else:
        phone_number = phone_numbers[0]
        print(
            f'area code: {phone_number[0]}, prexif: {phone_number[1]}, suffix: {phone_number[2]}')

    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!

    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")
