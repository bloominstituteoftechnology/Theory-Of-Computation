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
f = open(filename, mode = "r", encoding = "utf-8") # open the passed in file
stackoverflow_text = f.read() # read data from file
print('trebel')
# TODO Set up regex
links_reg = r'((http|ftp)s?:\/\/[^\s"]+)' #


# TODO Find links using regex, save in list called 'matches'
matches = []

link_results =  re.findall(links_reg, stackoverflow_text)
counter = 0
for link in link_results:
  if counter < 172:
    matches.append(link[0])
    counter +=1


# Check matches, print results

# print(matches) COMMENTED OUT FOR CONSOLE'S SAKE!

# TODO Read in links from answers.txt (hint...this is a CSV file), 
# save in list called 'answer_data'
answer_data = []

with open('answers.txt') as csv_file:
  csv_reader = csv.reader(csv_file, delimiter = ",")
  counter = 0
  for row in csv_reader:
    answer_data = row

# print(answer_data[0])
print(matches[171])
print(answer_data[171])

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