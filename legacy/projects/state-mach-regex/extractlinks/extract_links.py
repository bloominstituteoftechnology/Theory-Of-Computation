import re # module for processing regular expressions https://docs.python.org/3/library/re.html
import sys
import csv
import io
from bs4 import BeautifulSoup
#from urllib import urlopen

if __name__ == '__main__':
  # Exit if command line args entered incorrectly
  if len(sys.argv) != 2:
    print("usage: extract_links.py [input_file]")
    sys.exit(0)

# Filename is 2nd command line arg
filename = sys.argv[1]

# TODO Read HTML file


#*************************************
f = io.open(filename, mode="r", encoding="utf-8").read()

soup = BeautifulSoup(f, 'html.parser')
for link in soup.find_all('a'):
      print(link.get('href'))

#page = urllib.urlopen("./stackoverflow.html").read()
#p = re.compile(r'([a-z]+)[^>]*(?<!/)')

p = re.compile(r'("https...*\w*\W*")')
matches = p.findall(f)
#exp = r"([a-z]+)[^>]*(?<!/)"
#exp = r"https://regex101.com/r/24uzM5/1"
#matches = re.findall(exp, filename, 0)
print(matches)
#for match in matches:
      
 # print(match)
#re.findall(pattern, string, flags=0)
# TODO Set up regex



# TODO Find links using regex, save in list called 'matches'


# Check matches, print results
# TODO Read in links from answers.txt (hint...this is a CSV file), 
# save in list called 'answer_data'


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