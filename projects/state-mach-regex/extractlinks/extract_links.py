import re # module for processing regular expressions https://docs.python.org/3/library/re.html
import sys
import csv
import pprint
if __name__ == '__main__':
  # Exit if command line args entered incorrectly
  if len(sys.argv) != 2:
    print("usage: extract_links.py [input_file]")
    sys.exit(0)

# Filename is 2nd command line arg
filename = sys.argv[1]
# print(filename)

# Read HTML file
file = open(filename, "rt", errors="ignore") 

#Empty list to hold matches URLs
matches = []

# Regex to find all URL with http prefex
# http = re.compile(r'"(http[^ \t\n\r\f\v]*)"')
http = re.compile(r'(http[^ \t\n\r\f\v]*)"')

# For each line in the file
for line in file:

  # Find the http regex  
  urlFound = http.findall(line)

  # If the list is found
  if len(urlFound) > 0:
    
    # Append to the urlList
    matches.append(urlFound[0])

# print(f"Match List : {matches}")
pp = pprint.PrettyPrinter(indent=4)
pp.pprint(matches)
print(f"Match length : {len(matches)}")


# TODO Find links using regex, save in list called 'matches'


# Check matches, print results
# TODO Read in links from answers.txt (hint...this is a CSV file), 
# save in list called 'answer_data'

answer_data = []
with open('answers.txt', newline='') as f:
    reader = csv.reader(f, delimiter=',', quoting=csv.QUOTE_NONE)
    for row in reader:
        answer_data.append(row)

print(f"Answer length : {len(answer_data[0])}")
print(f"Answer List : {answer_data}")


# Compare answers with matches found using regex, print out any mismatches
# UNCOMMENT BELOW WHEN READY TO CHECK IF YOUR REGEX IS FINDING ALL THE LINKS
result = "All links matched!"
if len( matches ) != len( answer_data ):
  result = "Your regex found %i matches. There should be %i matches" %(len( matches ), len( answer_data ) )
else:
  for i in range( len(answer_data) ):
    if( matches[i] != answer_data[i] ):
      result = "Mismatched link. Got %s but expected %s" % ( matches[i], answer_data[i] )
      break
print( result )