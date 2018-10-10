import re # module for processing regular expressions https://docs.python.org/3/library/re.html
import sys
import csv
from urllib.request import urlopen

if __name__ == '__main__':
  # Exit if command line args entered incorrectly
  if len(sys.argv) != 2:
    print("usage: extract_links.py [input_file]")
    sys.exit(0)

# Filename is 2nd command line arg
filename = sys.argv[1]

# TODO Read HTML file
html = open(filename)

# TODO Set up regex
regex = r"https?://[a-z0-9-]+\..+?(?=\'|\")"
# regex = r"http[s]?:\/\/[0-9a-zA-Z\-_.+!*'\(\),]+[\/\/[0-9a-zA-Z\-_.+!*\(\),;/?:]+"

# TODO Find links using regex, save in list called 'matches'
matches = []
for line in html:
  matches.extend(re.findall(regex, f"{line}"))
for match in matches:
  print(f"{match}\n")

# Check matches, print results
# TODO Read in links from answers.txt (hint...this is a CSV file), 
# save in list called 'answer_data'

answer_data = []
with open('answers.txt') as csv_file:
  csv_reader = csv.reader(csv_file, delimiter=',')
  for row in csv_reader:
    answer_data = row
# csv_file = open('answers.txt')
# answer_data = csv.reader(csv_file, delimiter=',')

# Compare answers with matches found using regex, print out any mismatches
# for row in answer_data && match in matches:
#   if (row != match):
#     print(f'{row} is NOT {match}\n')
print(matches)
print(answer_data)
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