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


# TODO Set up regex


# TODO Find links using regex, save in list called 'matches'


# Check matches, print results
# TODO Read in links from answers.txt (hint...this is a CSV file), 
# save in list called 'answer_data'


# UNCOMMENT WHEN READY TO CHECK IF YOUR REGEX IS FINDING ALL THE LINKS
# # Compare answers with matches found using regex, print out any mismatches
# result = "All links matched!"
# for i in range( len(answer_data) ):
#   if( matches[i] != answer_data[i] ):
#     result = "Mismatched link. Got %s but expected %s" % ( matches[i], answer_data[i] )
#     break
# print( result )