import re # module for processing regular expressions https://docs.python.org/3/library/re.html

# Initial prompt to user
line = input("Enter a phone number to validate or 'exit' when done. ")

# TODO Define your regex
regex = r"1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}"

while line != "exit":
    # TODO Find matches
    match = re.match(regex, line)
    
    # TODO If no match found, print that no number was found
    if not match: 
      print("No number was found.") 
    
    # TODO Else, break number up into area code, prefix, and suffic
    else:
      # print(match.group()) 
      if len(match.group()) == 10:
        print(f'Area code: {match.group()[:3]}')
        print(f'Prefix: {match.group()[3:6]}')
        print(f'Suffix: {match.group()[-4:]}') 
      if len(match.group()) == 12:
        print(f'Area code: {match.group()[:3]}')
        print(f'Prefix: {match.group()[4:7]}')
        print(f'Suffix: {match.group()[-4:]}') 
      if len(match.group()) == 14:
        print(f'Area code: {match.group()[1:4]}')
        print(f'Prefix: {match.group()[6:9]}')
        print(f'Suffix: {match.group()[-4:]}') 
    
    # As a stretch goal, you can modify your regex to search for country codes
    # too and print that out as well!
    
    
    # Done validating, read in a new line
    line = input("Enter a phone number to validate or 'exit' when done. ")
