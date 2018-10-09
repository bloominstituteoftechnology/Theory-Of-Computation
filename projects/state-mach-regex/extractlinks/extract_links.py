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
f = open(filename, 'r')

contents = f.readlines()

# TODO Set up regex
regex = re.compile(r'http[s]?:\/\/.+?[\'"]')

unformatted_matches = []

for line in contents:
  line_matches = re.findall(regex, line)
  if(line_matches):
    for link in line_matches:
      unformatted_matches.append(line_matches)

matches = []

for item in unformatted_matches:
  item = item[0][0:-1]
  matches.append(item)

# Check matches, print results
# TODO Read in links from answers.txt (hint...this is a CSV file), 
# save in list called 'answer_data'
all_links = ''
unformatted_answer_data = []

with open('answers.txt', 'r') as csvfile:
  spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
  for row in spamreader:
    all_links = ', '.join(row)
    unformatted_answer_data = all_links.split(',')

answer_data = []

for link in unformatted_answer_data:
  link = link[1:-1]
  answer_data.append(link)

print("In answers and not in matches")
for link in answer_data:
  if link not in matches:
    print(link)
    print('\n\n')
    
print("In matches and not in answers")
for link in matches:
  if link not in answer_data:
    print(link)
    print('\n\n')


print("Matches Length: ", len(matches))
print("Answers Length: ", len(answer_data))

  
# Compare answers with matches found using regex, print out any mismatches
# UNCOMMENT BELOW WHEN READY TO CHECK IF YOUR REGEX IS FINDING ALL THE LINKS
# result = "All links matched!"
# if len( matches ) != len( answer_data ):
#   result = "Your regex found %i matches. There should be %i matches" %(len( matches ), len( answer_data ) )
# else:
#   for i in range( len(answer_data) ):
#     if( matches[i] != answer_data[i] ):
#       result = "Mismatched link. Got %s but expected %s" % ( matches[i], answer_data[i] )
#       break
# print( result )