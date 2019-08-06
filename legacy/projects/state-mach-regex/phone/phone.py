import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
phone_ex = r"[0-9]{3}[-]*[)]*[ ]*[0-9]{3}[-]*[ ]*[0-9]{4}"
# phone_ex = r"[0-9]{3}-*\)*\s*[0-9]{3}"
# This should work for any phone number formatted like these -> 123-456-7890, 5551234567, (666) 667-6668, 222 333 4444

while line != "exit":
    # TODO Find matches
    if re.findall(phone_ex, line):
        phone_num = re.findall(phone_ex, line)
        print('\nline = ', line)
        print(phone_num)
    # TODO Else, break number up into area code, prefix, and suffix
        for phoneNum in phone_num:
            num2 =''.join(i for i in phoneNum if i.isdigit())
            print(num2)
            areaCode = num2[0:3]
            prefix = num2[3:6]
            suffix = num2[6:]
            print('Area code:', areaCode, '\nPrefix:', prefix, '\nSuffix:', suffix, '\n')
    
    
    # TODO If no match found, print that no number was found

    else:
        print('No number was found.')
    
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")