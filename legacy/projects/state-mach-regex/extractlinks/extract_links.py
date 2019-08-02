import re # module for processing regular expressions https://docs.python.org/3/library/re.html
import sys
import csv
if __name__ == '__main__':
  # Exit if command line args entered incorrectly
  if len(sys.argv) != 2:
    print("usage: extract_links.py [input_file]")
    sys.exit(0)

'''
1. Write a regex to parse all links from a web page and print them:

```
curl https://stackoverflow.com > stackoverflow.html
python3 extract_links.py stackoverflow.html
```

This command will produce all of the links from the StackOverflow main page in
this format:

      https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d
      http://ajax.googleapis.com/ajax/libs/query/1.12.4/jquery.min.js
      ...
      ...
      ...

You can find these links by searching for the `http` or `https` string with your
regex, or the `href=` string, or potentially many others. Remember to separate
the url from the double quotes `"` surrounding it.
'''

# Filename is 2nd command line arg
filename = sys.argv[1]

# TODO Read HTML file


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