import re
import sys
import csv

if __name__ == '__main__':
  if len(sys.argv) != 2:
    print("usage: extract_links.py [input_file]")
    sys.exit(0)

html_page = sys.argv[1]

with open(html_page, 'r') as f:
    parsed_file = f.read()

f.close()

regex = "https?:\/\/[^\"\']+?\.[^\"\']+"

matches = re.findall(regex, parsed_file)

answer_data = []

with open('answers.txt') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        answer_data = row

csvfile.close()

result = "All links matched!"
if len( matches ) != len( answer_data ):
  result = "Your regex found %i matches. There should be %i matches" %(len( matches ), len( answer_data ) )
else:
  for i in range( len(answer_data) ):
    if( matches[i] != answer_data[i] ):
      result = "Mismatched link. Got %s but expected %s" % ( matches[i], answer_data[i] )
      break
print( result )
