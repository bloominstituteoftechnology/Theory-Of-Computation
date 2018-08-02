#!/usr/bin/python

import sys
import re
import json

if __name__ == '__main__':
  if len(sys.argv) != 2:
    print("usage: extract_links.py [input_file]")
    sys.exit(0)
  
  filename = sys.argv[1]
  
  with open(filename) as file:
    read_data = file.read()
  
  links = re.findall(r'https?:\/\/[^\'">\s]+?\.[^\'">\s]+', read_data)

  with open('./links.txt', 'w') as f:
    json.dump(links, f)