import re  # module for processing regular expressions https://docs.python.org/3/library/re.html
import sys
import csv

# Read HTML file
with open("stackoverflow.html", encoding="utf8") as stack_overflow_links:
    links = stack_overflow_links.read()


# Set up regex
regex_links = r"\b(https?:\/\/[A-z0-9.-]+[.][#@&%sA;-z0-9./?=~-]+)"

# Find links using regex, save in list called 'matches'
matches = re.findall(regex_links, links)
# print(matches)

# Check matches, print results
# Read in links from answers.txt (hint...this is a CSV file),
# save in list called 'answer_data'
with open('answers.txt', encoding="utf8") as so_answers:
    answers = so_answers.read().split(',')
    answer_data = [answer.replace('"', '') for answer in answers]


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
