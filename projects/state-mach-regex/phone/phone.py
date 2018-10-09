import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
phone_regex = re.compile("\(?\d{3}\)?[-\s]*\d{3}[-\s]*\d{4}")

while line != "exit":
    # TODO Find matches
    phone_nums = re.findall(phone_regex, line)
    # TODO If no match found, print that no number was found
    if len(phone_nums) == 0:
        print("No number was found")
    else:
    # TODO Else, break number up into area code, prefix, and suffic
        for i in range(len(phone_nums)):
            matches = re.search(r'(\d{3})[\s-]*(\d{3})[\s-]*(\d{4})', phone_nums[i])
            print(f"Area Code: {matches.group(1)}")
            print(f"Prefix: {matches.group(2)}")
            print(f"Suffix: {matches.group(3)}")

   
    
    
    
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")