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
matches = []

# TODO Read HTML file
f = open(filename, 'r')

# TODO Set up regex
regex = r"https?:\/\/[0-9A-Za-z-]+.?\w+.[A-Za-z]{2,3}\/?[0-9A-Za-z\/@#%&=_+;.?-]+"

# TODO Find links using regex, save in list called 'matches'
for line in f:
  match = re.search(regex, line)
  if match:
    # print(match.group()) 
    matches.append("'" + match.group() + "'")
f.close()

# Check matches, print results
for match in matches:
  print(match)

# TODO Read in links from answers.txt (hint...this is a CSV file), 
# save in list called 'answer_data'
import csv
answer_data = []
with open('answers.txt') as csvfile:
  reader = csv.reader(csvfile, delimiter=",")
  for row in reader:
    answer_data.append(row) 

for answer in answer_data:
  print(answer)

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
