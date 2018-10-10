import re # module for processing regular expressions https://docs.python.org/3/library/re.html
import sys
import csv


if __name__ == '__main__':
  # Exit if command line args entered incorrectly
  if len(sys.argv) != 2:
    print("usage: extract_links.py [input_file]")
    sys.exit(0)

# Filename is 2nd command line arg
filename = sys.argv[1]

# TODO Read HTML file
html = open(filename)
""" with open(filename) as f:
    content = f.readlines()

for line in content:
    print(line) """


# TODO Set up regex
regex = r"https?://[a-z0-9-]+\..+?(?=\'|\")"

# TODO Find links using regex, save in list called 'matches'

""" matches = re.findall(regex,'filetext') """
matches = []
for line in html:
      matches.extend(re.findall(regex, line))
for match in matches:
      print(match)

# Check matches, print results


# TODO Read in links from answers.txt (hint...this is a CSV file), 
# save in list called 'answer_data'

answer_data = []
with open('answers.txt', newline='') as csvfile:
    csv_data = csv.reader(csvfile, delimiter=',')
    for row in csv_data:
        answer_data = row

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




