import re  # module for processing regular expressions https://docs.python.org/3/library/re.html
import sys
import csv
import os

if __name__ == '__main__':
    # Exit if command line args entered incorrectly
    if len(sys.argv) != 2:
        print("usage: extract_links.py [input_file]")
        sys.exit(0)

# Filename is 2nd command line arg
filename = sys.argv[1]

path = os.getcwd()

# TODO Read HTML file
f = open(path+'\\'+filename, 'r', encoding='utf-8')
content = f.read()

# TODO Set up regex
regex = re.compile(r"[\'\"]https?:\/\/[a-zA-Z0-9.-]+(\.).+?[\'\"]")

# TODO Find links using regex, save in list called 'matches'
found = re.findall(regex, content)
matches = [link[1:-1] for link in found]

# Check matches, print results
# TODO Read in links from answers.txt (hint...this is a CSV file),
# save in list called 'answer_data'
with open('answers.txt', 'r') as f:
    text = csv.reader(f, delimiter=',')
    txt = [i for i in text]
    answer_data = txt[0]

# Compare answers with matches found using regex, print out any mismatches
# UNCOMMENT BELOW WHEN READY TO CHECK IF YOUR REGEX IS FINDING ALL THE LINKS
result = "All links matched!"
if len(matches) != len(answer_data):
    result = "Your regex found %i matches. There should be %i matches" % (
        len(matches), len(answer_data))
else:
    for i in range(len(answer_data)):
        if(matches[i] != answer_data[i]):
            result = "Mismatched link. Got %s but expected %s" % (
                matches[i], answer_data[i])
            break
print(result)
