# Project

## State machines:

1. Draw out the state machine for a car's turn signal system. What are the
   transitions leading to both lights not blinking, one light blinking, the
   other light blinking, or both lights blinking?
   
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="800" height="600" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="346.5" cy="304.5" rx="30" ry="30"/>
	<text x="297.5" y="310.5" font-family="Times New Roman" font-size="20">No Blinkers</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="346.5" cy="304.5" rx="24" ry="24"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="353.5" cy="560.5" rx="30" ry="30"/>
	<text x="304.5" y="566.5" font-family="Times New Roman" font-size="20">Left Blinker</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="353.5" cy="35.5" rx="30" ry="30"/>
	<text x="298.5" y="41.5" font-family="Times New Roman" font-size="20">Right Blinker</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="57.5" cy="304.5" rx="30" ry="30"/>
	<text x="1.5" y="310.5" font-family="Times New Roman" font-size="20">Both Blinkers</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="726.5" cy="304.5" rx="30" ry="30"/>
	<text x="669.5" y="310.5" font-family="Times New Roman" font-size="20">Wheel Turned</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 340.846,533.314 A 288.222,288.222 0 0 1 335.35,332.336"/>
	<polygon fill="black" stroke-width="1" points="340.846,533.314 342.488,524.024 333.215,527.767"/>
	<text x="214.5" y="439.5" font-family="Times New Roman" font-size="20">Lever Down</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 338.315,275.645 A 403.948,403.948 0 0 1 343.825,63.89"/>
	<polygon fill="black" stroke-width="1" points="343.825,63.89 336.738,70.117 346.317,72.989"/>
	<text x="245.5" y="175.5" font-family="Times New Roman" font-size="20">Lever Up</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 320.048,318.621 A 279.152,279.152 0 0 1 83.952,318.621"/>
	<polygon fill="black" stroke-width="1" points="83.952,318.621 89.087,326.535 93.316,317.473"/>
	<text x="110.5" y="365.5" font-family="Times New Roman" font-size="20">Hazard Button Pressed</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 84.712,291.898 A 311.836,311.836 0 0 1 319.288,291.898"/>
	<polygon fill="black" stroke-width="1" points="319.288,291.898 313.756,284.256 309.995,293.522"/>
	<text x="104.5" y="259.5" font-family="Times New Roman" font-size="20">Hazard Button Released</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 362.555,64.092 A 368.857,368.857 0 0 1 357.03,276.417"/>
	<polygon fill="black" stroke-width="1" points="357.03,276.417 364.281,270.382 354.782,267.255"/>
	<text x="380.5" y="176.5" font-family="Times New Roman" font-size="20">Lever Neutral</text>
	<polygon stroke="black" stroke-width="1" points="377.832,53.048 702.168,286.952"/>
	<polygon fill="black" stroke-width="1" points="702.168,286.952 698.604,278.217 692.754,286.328"/>
	<text x="545.5" y="161.5" font-family="Times New Roman" font-size="20">Wheel Turned to the right</text>
	<polygon stroke="black" stroke-width="1" points="696.5,304.5 376.5,304.5"/>
	<polygon fill="black" stroke-width="1" points="376.5,304.5 384.5,309.5 384.5,299.5"/>
	<text x="418.5" y="295.5" font-family="Times New Roman" font-size="20">Wheel Turned back to Center</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 357.32,332.471 A 340.244,340.244 0 0 1 362.775,531.98"/>
```

## Regular Expressions

1. Write a regex to parse all links from a web page and print them:

```
curl https://stackoverflow.com > stackoverflow.html
node extractlinks.js stackoverflow.html
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

2. Write a regex that accepts a phone number in any phone number format:

```
555-123-4567
5551234567
(555) 123-4567
555 123 4567
```

The output of any of these phone #s as input should be:

      5551234567
