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
with open(filename, "r", encoding='utf8') as f:
    file_read = f.read()
f.close()

# TODO Set up regex
# TODO Find links using regex, save in list called 'matches'

matches = re.findall(r'https?://[^\\\ \"<>^\']+?\.[^\\\ \"<>^\']+', file_read)


# Check matches, print results
# TODO Read in links from answers.txt (hint...this is a CSV file), 
answer_data = []
with open('answers.txt') as csv_file:
  csv_reader = csv.reader(csv_file, delimiter=',')
  for row in csv_reader:
        answer_data = row
csv_file.close()

# Compare answers with matches found using regex, print out any mismatches
# UNCOMMENT BELOW WHEN READY TO CHECK IF YOUR REGEX IS FINDING ALL THE LINKS
result = "All links matched!"
if len( matches ) != len( answer_data ):
  result = "Your regex found %i matches. There should be %i matches" %(len( matches ), len( answer_data ) )
else:
  for i in range(len(answer_data)):
    if(matches[i] != answer_data[i]):
      result = "Mismatched link. Got %s but expected %s" % ( matches[i], answer_data[i] )
      break
print( result )