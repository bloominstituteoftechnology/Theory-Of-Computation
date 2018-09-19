# Regular Expressions

A _regular expression_ is a sequence of characters that define a search pattern.

In common daily usage, regular expressions (often called _regexes_) are used to
match patterns in strings of characters.

* [Regular Expression](https://en.wikipedia.org/wiki/Regular_expression)
* [Regexr regular expression tester](https://regexr.com/)

## Example Regular Expressions

```
[aex]  Match any letter a, e, or x.
[0-9]  Match any digit 0-9
a?     Match 0 or 1 occurrences of the letter a
b*     Match 0 or more occurrences of the letter b
c+     Match 1 or more occurrences of the letter c
.      Match any character
.*     Match 0 or more of any character
\.     Match a period (\ not necessary when using [])
\*     Match an asterisk (\ not necessary when using [])
[^ef]  Match any character that's not e or f
^      Match beginning of line
$      Match end of line
```

## Matching patterns in Strings

When trying to come up with a regex that matches a number of strings, look for
runs of common types of characters in the string. These can often be replaced
with the `?`, `+`, or `*` symbols.

Look for mandatory elements and make sure they're present, as well.

### Matching an email address

There is no sensible regular expression that will determine if an email address
is valid. (They're more complicated than you think.)

With that in mind, if you ever have to find a regex for an email, just have it
check for the mandatory elements.

An email address of the form `name@example.com` has a lot of options. Maybe the
name has underscores, numbers, or other characters. Maybe the domain has
multiple parts.

For the name, let's match any sequence of 1-or-more characters:

```
[a-z]+
```

Then an `@`:

```
[a-z]+@
```

Then for the domain, we want at least two stretches of letters with a period in
between.

Let's look for letters, followed by a period, followed by letters or periods:

```
[a-z]+@[a-z]+.[a-z.]+
```

Does that match `name@example.com`? Let's look.

The first part of the regex `[a-z]+` consumes any sequence of 1 or more
characters from `a` to `z`. That consumes the `name` off the front of the
address, leaving us with `@example.com` still to be matched.

Next, the `@` in the regex matches the `@`, so it's consumed and we're left with
`example.com`.

Then, again, we consume 1-or-more letters with `[a-z]+`, eating up the `example`
and leaving us with `.com`.

Finally, we look for any sequence of letters or `.` with `[a-z.]+`, and that
consumes the `.com`. We've made a match!

Let's try a failure case. Is `name` a valid email address?

First we consume `[a-z]+`, which eats the `name`, leaving us with an empty string.

Next we try to consume `@` from the regex, but there's nothing left in the
string. We stop searching at this point. It is not a match.

Where does the regex fail us?

All of the following are valid email addresses. How does our regex fail to detect them?

* Name@example.com
* name22@example.com
* name+2_3@example.com
* name(goats)@example.com
* (goats)name@example.com

All of the following are invalid email addresses. Why does our regex say they're OK?

* name@example.com.
* name@example..com
* name@example..

How could it be improved to handle these cases? Writing an email regex is hard.


### Greedy versus Non-Greedy

Regexes can be termed _greedy_ or _non-greedy_.

Greedy regexes consume as much as they can before stopping. Let's take a regex
that looks for HTML tags of the form:

```HTML
<any>content</any>
```

A regex that does this might look like this:

```
<.+>.+</.+>
```

A greedy regex will consume as much as possible right away, notable the first
`<.+>` will consume everything. First, it consumes the `<`. Then it consumes one
or more of any character, `any>content</any`. Finally it consumes the last `>`.
then it tries to consume another `.+` where `content` should be, but there's
nothing left in the input so it fails to match.

To make the regex _lazy_, just put a `?` after the `+` or `*` that's being too
greedy. This will cause it to stop consuming at the _earliest_ opportunity as
opposed to the _latest_.

```
<.+?>.+?<.+?>
```

## Regular Expression/State Machine Equivalence

Regular expressions can be directly converted into state machines and often vice-versa.

When converting to a state machine, it might be useful to think of the states as "consuming a certain type of character".

```
foo+d    matches food foood foooood etc.
```

![Fooood State Machine](img/fooood-sm.png)

Notice how the `+` in the regex forms a loop in the state machine diagram


## Exercises

### Write a Regular Expression

Write a regex that matches a `1`, followed by 0 or more `2`s, followed by 0-1 `3`s.
*************
\(12*3?)\g


### Write a Regular Expression

Write a regex that matches any one or two digit number, followed by a space,
followed by the word `monkey`, followed by 0 or 1 `s`s.
*************
/\d{0,2} (monkey)s?/g

### Convert Regex to State Machine Diagram

Draw a state machine diagram for the following regex that matches a clock time.

    [0-9]?[0-9]:[0-9][0-9] [AP]M

For this, it's OK to have a single transition for all the digits, e.g. "Go from
start state to state 1 if the input is `[0-9]` or ε":

![Regex to State Machine](img/regex-to-sm.png)
