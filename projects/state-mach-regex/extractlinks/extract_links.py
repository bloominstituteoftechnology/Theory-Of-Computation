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
# html = open(filename)

# TODO Set up regex
# regex = r"https?://[\dA-z]+\..+?(?=\'|\")"

# TODO Find links using regex, save in list called 'matches'
# matches = []
# for line in html: 
#     matches.extend(re.findall(regex, line))
# for match in matches:
#     print(match)

# re.findall(pattern, string, flags=0)
# Return all non-overlapping matches of pattern in string, as a list of strings. 
# The string is scanned left-to-right, and matches are returned in the order found. 
# If one or more groups are present in the pattern, return a list of groups; 
# this will be a list of tuples if the pattern has more than one group. 

# Check matches, print results
# TODO Read in links from answers.txt (hint...this is a CSV file), 
# save in list called 'answer_data'
# answer_data = []
# with open('answers.txt') as csv_file:
#     csv_reader = csv_reader(csv_file, delimiter=",")
#     for row in csv_reader:
#         answer_data = row


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