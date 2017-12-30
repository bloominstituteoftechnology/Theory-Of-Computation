# Languages

## Objectives

* Learn what Formal Languages and Grammars are and how they are used
* Learn Backus-Naur form and how it is used

## Languages

[Formal Languages](https://en.wikipedia.org/wiki/Formal_language)

Let's consider a formal language that consists of binary strings of length 3:

Examples:

    000 001 010 011 100 101 110 111

Grammar:

    S -> 0A
    S -> 1A
    A -> 0B
    A -> 1B
    B -> 0C
    B -> 1C
    C -> null

> Notice how similar this grammar is to a state machine. Fun fact: grammars like
> this can be converted to state machines and vice versa!

Regular grammars typically do not have fixed lengths:

    S -> A1
    A -> A0
    A -> A1
    A -> B1
    B -> null 

A set of rules like this is expressed typically in a shorter form:

    S = 1[0|1]+1

or

    S = 1[0|1]*1

by adding the rule 

    A -> B

[Context-free grammars](https://en.wikipedia.org/wiki/Context-free_grammar)

Chomsky invented CFGs in the context of natural language. They haven't proven to
be extremely useful in that context, but have become the standard for all
programming languages.

A context free grammar is one that provides much greater expression.

## Backus-Naur Form

[Backus-Naur Form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)
(_BNF_) is used to describe grammars. It is a concise and compact way of
describing the exact syntax of a language.

Example BNF for a made up language:

```
<expressions> := <expression+\>
<expression> := <type> <name> = <value>
                <while-loop>
                <print> <name>
                <print> <value>
<conditional> := <name> <lt> <value>
                 <name> <gt> <value>
                 <name> <eq> <value>
<while-loop> := <while> <conditional> | <expressions> \
<type> := d_int | d_string | banana
<name> := string
<value> := integer or a string
<print> := 'console.log(<name>)' | 'console.log(<value>)'
<lt> := '<'
<gt> := '>'
<eq> := '='
<while> := 'while (<conditional>)'
```

BNF for [PL/0](https://en.wikipedia.org/wiki/PL/0), a simple programming
language:

```
program = block "." .

block = [ "const" ident "=" number {"," ident "=" number} ";"]
        [ "var" ident {"," ident} ";"]
        { "procedure" ident ";" block ";" } statement .

statement = [ ident ":=" expression | "call" ident 
              | "?" ident | "!" expression 
              | "begin" statement {";" statement } "end" 
              | "if" condition "then" statement 
              | "while" condition "do" statement ].

condition = "odd" expression |
            expression ("="|"#"|"<"|"<="|">"|">=") expression .

expression = [ "+"|"-"] term { ("+"|"-") term}.

term = factor {("*"|"/") factor}.

factor = ident | number | "(" expression ")".
```

[Programming Languages](https://en.wikipedia.org/wiki/Programming_language)
These are _obviously_ of special importance. :)

[Algebraic
Expressions](https://en.wikipedia.org/w/index.php?title=Context-free_grammar&action=edit&section=14)

## Exercises

### Look for Compile Errors

The following PL/0 code has a syntax error in it. What needs to be fixed?

Use the BNF of the language, above.

```pl/0
VAR x;

BEGIN
   x := 1;
   WHILE x <= 10
   BEGIN
      ! x;
      x := x + 1
   END
END.
```
