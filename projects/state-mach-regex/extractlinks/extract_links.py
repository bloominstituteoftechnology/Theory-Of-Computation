import re  # module for processing regular expressions https://docs.python.org/3/library/re.html
import sys
import csv

if __name__ == '__main__':
    # Exit if command line args entered incorrectly
    if len(sys.argv) != 2:
        print("usage: extract_links.py [input_file]")
        sys.exit(0)

# Filename is 2nd command line arg
filename = sys.argv[1]

# Read HTML file
file = open(filename).read()

# Set up regex
regex = r'https?:\/\/[^\"\ \<\>\{\}\|\\\^\~\[\]\']+?\.[^\"\ \<\>\{\}\|\\\^\~\[\]\']+'

# Find links using regex, save in list called 'matches'
matches = re.findall(regex, file)

# Check matches, print results
print(matches)

# Read in links from answers.txt (hint...this is a CSV file),
# save in list called 'answer_data'
# answer_data = open(answers.txt).read()
with open('answers.txt', newline='') as file:
    reader = csv.reader(file)
    answer_data = next(reader)


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
