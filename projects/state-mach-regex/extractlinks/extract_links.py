import re # module for processing regular expressions https://docs.python.org/3/library/re.html
import sys
import csv


if __name__ == '__main__':
    # Exit if command line args entered incorrectly
    if len(sys.argv) != 2:
        print("usage: extract_links.py [input_file]")
        sys.exit(0)
    # Filename is 2nd command line arg
    filename = sys.argv[1]

    file = open(filename, 'r')
    p = re.compile("https?://[a-z0-9-]+\..+?(?=\"|\')")

    matches = []
    for line in file:
        matches.extend(p.findall(line))

    file.close()

    answer_file = open("answers.txt", 'r')
    answer_datas = csv.reader(answer_file, delimiter=",")
    answer_data = []
    for line in answer_datas:
        answer_data.extend(line)

    result = "All links matched!"
    # answer_file.close()
    if len(matches) != len(answer_data):
        result = "Your regex found %i matches. There should be %i matches" % (len(matches), len(answer_data))
    else:
        for i in range(len(answer_data)):
            if(matches[i] != answer_data[i]):
                result = "Mismatched link. Got %s but expected %s" % (matches[i], answer_data[i])
    print(result)

