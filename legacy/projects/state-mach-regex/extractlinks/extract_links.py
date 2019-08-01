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
matches = []
html_file = open(f"{filename}", "r", encoding='utf-8', newline="\n")

count = 0
for line in html_file:
  if 'http' in line:
# TODO Set up regex
# TODO Find links using regex, save in list called 'matches'
    link_ex = (r'http.*["]\S')
    link = re.findall(link_ex, line)
    if len(link) > 0:
      matches.append(link[0][:-2])
      count += 1
    if count > 5:
      break

html_file.close()
# Check matches, print results
if matches:
  print(matches)

# TODO Read in links from answers.txt (hint...this is a CSV file), 
# save in list called 'answer_data'
answer_data = []
csvfile = open("answers.txt")
readCSV = csv.reader(csvfile, delimiter=",")
for link in readCSV:
  answer_data.append(link[0])
csvfile.close()
print(f"\n\n***********ANSWER DATA*************** {answer_data}")

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