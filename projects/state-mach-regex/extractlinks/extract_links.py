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

# TODO Read HTML file
textfile = open(filename, 'r')
filetext = textfile.read()
textfile.close()

"""https://regexone.com/references/python"""
# TODO Set up regex
"""
https*:// - http (0-1) s ://
(?=") - positive lookahead for ' or "
"""
regex = r"https?://[a-z0-9-]+\..+?(?=\'|\")"  # r means "raw string" i.e. not interpolated

# TODO Find links using regex, save in list called 'matches'
matches = re.findall(regex, filetext)
# print(f"MATCHES: {matches}")

# Check matches, print results
# TODO Read in links from answers.txt (hint...this is a CSV file),
# save in list called 'answer_data'
data = []
with open('answers.txt', newline='') as csvfile:
    csv_data = csv.reader(csvfile, delimiter=',')
    for row in csv_data:
        answer_data = row

# print(f"ANSWERS: {answer_data}")

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
