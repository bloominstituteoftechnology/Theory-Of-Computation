#!/usr/bin/python

import sys
import json

if __name__ == '__main__':
  with open('./answers.txt') as f:
    answers = json.load(f)

  with open('./links.txt') as f:
    links = json.load(f)

  for i in range(len(answers)):
    if links[i] != answers[i]:
      print('Mismatched link. Expected: \n%s\nbut got: \n%s' %(answers[i], links[i]))
      sys.exit(1)
    
  print('You found all the links!')