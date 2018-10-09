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

regex = "''"

matches = re.findall(regex, parsed_file)

print(matches)

answer_data = []

with open('stackoverflow.html') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    next(reader)
    for row in reader:
        answer_data.append(row)

result = "All links matched!"
if len( matches ) != len( answer_data ):
  result = "Your regex found %i matches. There should be %i matches" %(len( matches ), len( answer_data ) )
else:
  for i in range( len(answer_data) ):
    if( matches[i] != answer_data[i] ):
      result = "Mismatched link. Got %s but expected %s" % ( matches[i], answer_data[i] )
      break
print( result )
