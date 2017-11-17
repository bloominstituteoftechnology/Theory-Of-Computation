# Theory Of Computation

Why do I have to build data structures and what are they for? Data structures are specific examples of mechanical, automated problem solving.

# Abstract computing and the Turing Machine

Computers in 1880 were men and more often women who would work out formulas with pen and paper for an hourly rate. Calculations were needed for phsyics and chemistry research, calculus, other mathematics, and finances. This lead to an academic discipline that involved philosophy about the nature of mathematics and what kinds of knowledge could be formally proven.

Alonzo Church, Alan Turning, Stephen Kleene, Kurt Godel, David Hilbert, and others worked to formalize these ideas into mathematical proofs leading, eventually, to the Turing Machine and the proofs that accompanied it.

_It was stated above that 'a function is effectively calculable if its values can be found by some purely mechanical process'. We may take this statement literally, understanding by a purely mechanical process one which could be carried out by a machine. It is possible to give a mathematical description, in a certain normal form, of the structures of these machines. The development of these ideas leads to the author's definition of a computable function, and to an identification of computability with effective calculability. It is not difficult, though somewhat laborious, to prove that these three definitions [the 3rd is the λ-calculus] are equivalent._

_Alan Turing (1939) in The Undecidable, p. 160_

Something is numerically computable by a human iff it is computable by a Turing machine, and that all forms of iterative deterministic computation are equivalent.

# Lambda School Theory of Computation Links

### Mathematical and Theoretical background

[Propositional Calculus](https://en.wikipedia.org/wiki/Propositional_calculus)

The pursuit of ancient philosophy from Aristotle and Stoic philosophers near 300 BCE:

    If the first, then the second; the first, therefore the second.
    If the first, then the second; not the second, therefore not the second.
    Not the first and the second both; the first, therefor not the second.
    The first or the second but not both; the first, therefor not the second.
    The first or the second one or the other; not the second, therefore the first.

[Calculus](https://en.wikipedia.org/wiki/Calculus)

Not a direct antecedent of Computer Science, Calculus instead is part of the train of reasonining that informs all of the modern world: Logic and formal analysis can describe the behavior of things.

[Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra)

George Boole and Augustus DeMorgan in the mid 1800s expanded on ancient propositional calculus into a formal algebra:

    A ∨ B (A or B)
    A ∧ B (A and B)
    ¬A (not A)
    A ⇒  B (A implies B)
    A ⇔  B (A if and only if B)

[Logic symbols](https://en.wikipedia.org/wiki/List_of_logic_symbols)

[Charles Babbage](https://en.wikipedia.org/wiki/Charles_Babbage) (1791-1871)

Charles Babbage first proposed that these formal rules could be automated.
 He built part of the Difference Engine and proposed the design of the Analytical Engine. His work became the foundation of formal automata theory.

[Ada Lovelace](https://en.wikipedia.org/wiki/Charles_Babbage) (1815-1852)

The first computer programmer, Ada Lovelace studied under Charles Babbage and created the first languages to automate the unbuilt Analytical Engine. 

[Principia Mathematica](https://en.wikipedia.org/wiki/Principia_Mathematica)

Principia Mathematica (Not the one by Newton!) was written by Alfred North Whitehead and Bertrand Russell. It was an attempt to describe all of mathematics from a set of starting axioms. This was the culminative attempt of formal logicians to capture "reasoning ability" into a formal method, and profoundly influenced the development of computer systems.

### Grammars, State Machines, and Languages

[Automata Theory](https://en.wikipedia.org/wiki/Automata_theory)

The study of deterministic methods of reasoning, beginning with deterministic finite automata.

#### Recorded examples:

[Finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine)

Become familiar with the notation of state machines and be able to describe the simple function of any machine with a state machine.

A finite state machine is the most common construct in all of Computer Science. It is the basis on which the rest of computation is built.

[Formal Languages](https://en.wikipedia.org/wiki/Formal_language)

Let's consider a formal language that can produce any binary string of length 3:

Examples:

    000 001 010 011 100 101 110 111

Language:

    S -> 0A
    S -> 1A
    A -> 0B
    A -> 1B
    B -> 0C
    B -> 1C
    C -> null

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

[Regular Expression](https://en.wikipedia.org/wiki/Regular_expression) These are of special importance in Computer Science!

#### Examples of significant importance

[Context-free grammars](https://en.wikipedia.org/wiki/Context-free_grammar)

Chomsky invented CFGs in the context of natural language. They haven't proven to be extremely useful in that context, but have become the standard for all programming languages.

A context free grammar is one that provides much greater expression.

[Backus Naur Form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) This is of special importance in Computer Science!

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
    <value> := integer or a string <print> := 'console.log(<name>)' | 'console.log(<value>)'
    <lt> := '<'
    <gt> := '>'
    <eq> := '='
    <while> := 'while (<conditional>)'

[Programming Languages](https://en.wikipedia.org/wiki/Programming_language) These are _obviously_ of special importance. :)

[Algebraic Expressions](https://en.wikipedia.org/w/index.php?title=Context-free_grammar&action=edit&section=14)

### Turing Machines

[theory of computation models](https://en.wikipedia.org/wiki/Theory_of_computation)

[Halting Problem](https://en.wikipedia.org/wiki/Halting_problem) This is of special importance in Computer Science!

One of the first decision problems and the foundation of Computer Science. Turing Machine was invented in order to provide a solution for this problem - that it is undecidable.

The question is: Can a program be written `f` that will for every other program `g` say whether or not `g` will finish? Turing proves using complicated mathematics, and by inventing a Turing Machine in order to support his proof, that this machine `f` cannot be invented.

The takeaway from this proof and observation is that it is not possible to build a computer program that can solve any problem - some problems are undeciable, that is, unsolveable.

[Church-Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis)

[computability](https://en.wikipedia.org/wiki/Computability_theory)

[Turing Machines](https://en.wikipedia.org/wiki/Turing_machine) These are of special importance in Computer Science!

[Visual example of a Turing Machine as formula](https://cs.stackexchange.com/questions/11542/how-to-construct-and-write-down-a-Turing-machine-for-a-given-language)

[Gödel's Incompleteness Theorem](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems)

# You do (Assignment):

## State machines:

1. Draw out the state machine for a todo web app.

## Regular Expressions

1. Write a regex to parse all links from a web page and print them:

    curl https://stackoverflow.com > stackoverflow.html
    node extractlinks.js stackoverflow.html

This command will produce all of the links from the StackOverflow main page in this format:

    https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d
    https://ajax.googleapis.com/ajax/libs/query/1.12.4/jquery.min.js
    ...
    ...
    ...

You can find these links by searching for the `https` string with your regex, or the `href=` string, or potentially many others. Remember to separate the url from the double quotes `"` surrounding it.

2. Parse all of the image urls from https://imgur.com and pastes them in the above format.

3. Write a regex that accepts a phone number in any phone number format:


    555-123-4567
    5551234567
    (555) 123-4567
    555 123 4567

The output of any of these phone #s as input should be:

    5551234567

## Extra Credit:

Make sure that the link and image crawlers above only pull links and images from the `<body>` portion of the sites, not from `<head>`.

