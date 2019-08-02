import re # module for processing regular expressions https://docs.python.org/3/library/re.html
import sys
import csv
import codecs
if __name__ == '__main__':
  # Exit if command line args entered incorrectly
  if len(sys.argv) != 2:
    print("usage: extract_links.py [input_file]")
    sys.exit(0)

# Filename is 2nd command line arg
filename = sys.argv[1]

# TODO Read HTML file
f=open(filename, "r", encoding='utf-8')
str = f.read()
# TODO Set up regex
regex = "(http://|ftp://|https://)([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-;]*)?"
# TODO Find links using regex, save in list called 'matches'
matches = re.findall(regex, str)
for i in range(0, len(matches)):
    matches[i] = ''.join(repr(j) for j in matches[i])
    matches[i] = re.sub("['\",]", '', matches[i])
    matches[i] = '"' + matches[i] + '"'
    print(matches[i])

# Check matches, print results
# TODO Read in links from answers.txt (hint...this is a CSV file),
# save in list called 'answer_data'
answer_data = open("answers.txt").read()

answer_data = answer_data.split(",")
# print(answer_data)
# Compare answers with matches found using regex, print out any mismatches
# UNCOMMENT BELOW WHEN READY TO CHECK IF YOUR REGEX IS FINDING ALL THE LINKS
result = "All links matched!"
if len( matches ) != len( answer_data ):
  result = "Your regex found %i matches. There should be %i matches" %(len( matches ), len( answer_data ) )
else:
  for i in range( len(answer_data) ):
    if( matches[i] != answer_data[i] ):
      print(i)
      result = "Mismatched link. Got \n%s but expected \n%s" % ( matches[i], answer_data[i] )
      break
print( result )
