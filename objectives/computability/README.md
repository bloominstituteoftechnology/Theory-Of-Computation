# Theory Of Computation

## Objectives

* Learn what general-purpose computation is
* Learn the who's-who in the early study of computation
* Learn about the Church-Turing Thesis

Why do I have to build data structures and what are they for? Data structures
are specific examples of mechanical, automated problem solving.

## Abstract computing and the Turing Machine

Computers in 1880 were men and more often women who would work out formulas with
pen and paper for an hourly rate. Calculations were needed for phsyics and
chemistry research, calculus, other mathematics, and finances. This lead to an
academic discipline that involved philosophy about the nature of mathematics and
what kinds of knowledge could be formally proven.

Alonzo Church, Alan Turning, Stephen Kleene, Kurt Godel, David Hilbert, and
others worked to formalize these ideas into mathematical proofs leading,
eventually, to the Turing Machine and the proofs that accompanied it.

> It was stated above that 'a function is effectively calculable if its values
> can be found by some purely mechanical process'. We may take this statement
> literally, understanding by a purely mechanical process one which could be
> carried out by a machine. It is possible to give a mathematical description,
> in a certain normal form, of the structures of these machines. The development
> of these ideas leads to the author's definition of a computable function, and
> to an identification of computability with effective calculability. It is not
> difficult, though somewhat laborious, to prove that these three definitions
> [the 3rd is the λ-calculus] are equivalent.
>
> _Alan Turing (1939) in The Undecidable, p. 160_

Something is numerically computable by a human if-and-only-if it is computable
by a Turing machine, and that all forms of iterative deterministic computation
are equivalent.

## Abstract Computing and the Lambda Calculus

Have you ever wondered where the Lambda in Lambda School came from? Wonder no
more. It's from _Lambda Calculus_, or _λ-calculus_.

λ-calculus is a formal mathematical system for modeling computation. It
provably is able to support all the same computational abilities that a Turing
Machine does.

One of the most common places the λ-calculus makes an appearance is in
[_functional programming
languages_](ihttps://en.wikipedia.org/wiki/Functional_programming) such as
[LISP](https://en.wikipedia.org/wiki/Lisp_(programming_language)).

> Functional Programming is what is called a [_programming
> paradigm_](https://en.wikipedia.org/wiki/Programming_paradigm).
> Object-Oriented Programming is another (e.g. JavaScript, C++). Procedural is
> another (e.g. C). (Although truly most languages are _mixed-paradigm_.) It is
> usually more difficult to learn a new programming paradigm than it is to learn
> another language of the same paradigm.

Alan Turing came up with the Turing Machine model of computation. At the same
time, Alonzo Church came up with the Lambda Calculus model. Church and Turing
proved these two models to be equivalent with the _Church-Turing Thesis_.

## Mathematical and Theoretical background

[Propositional Calculus](https://en.wikipedia.org/wiki/Propositional_calculus)

The pursuit of ancient philosophy from Aristotle and Stoic philosophers near 300 BCE:

    If the first, then the second; the first, therefore the second.
    If the first, then the second; not the second, therefore not the second.
    Not the first and the second both; the first, therefor not the second.
    The first or the second but not both; the first, therefor not the second.
    The first or the second one or the other; not the second, therefore the first.

[Calculus](https://en.wikipedia.org/wiki/Calculus)

Not a direct antecedent of Computer Science, Calculus instead is part of the
train of reasoning that informs all of the modern world: Logic and formal
analysis can describe the behavior of things.

[Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra)

George Boole and Augustus DeMorgan in the mid 1800s expanded on ancient
propositional calculus into a formal algebra:

    A ∨ B (A or B)
    A ∧ B (A and B)
    ¬A (not A)
    A ⇒  B (A implies B)
    A ⇔  B (A if and only if B)

[Logic symbols](https://en.wikipedia.org/wiki/List_of_logic_symbols)

[Charles Babbage](https://en.wikipedia.org/wiki/Charles_Babbage) (1791-1871)

Charles Babbage first proposed that these formal rules could be automated. He
built part of the Difference Engine and proposed the design of the Analytical
Engine. His work became the foundation of formal automata theory.

[Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace) (1815-1852)

The first computer programmer, Ada Lovelace studied under Charles Babbage and
created the first languages to automate the unbuilt Analytical Engine. 

[Principia Mathematica](https://en.wikipedia.org/wiki/Principia_Mathematica)

Principia Mathematica (Not the one by Newton!) was written by Alfred North
Whitehead and Bertrand Russell. It was an attempt to describe all of mathematics
from a set of starting axioms. This was the culminative attempt of formal
logicians to capture "reasoning ability" into a formal method, and profoundly
influenced the development of computer systems.

### Turing Machines

[Theory of computation
models](https://en.wikipedia.org/wiki/Theory_of_computation)

[Halting Problem](https://en.wikipedia.org/wiki/Halting_problem) This is of
special importance in Computer Science!

One of the first decision problems and the foundation of Computer Science.
The Turing Machine was invented in order to provide a solution for this problem -
that it is undecidable.

The question is: Can a program be written `f` that will for every other program
`g` say whether or not `g` will finish? Turing proves using complicated
mathematics, and by inventing a Turing Machine in order to support his proof,
that this machine `f` cannot be invented.

The takeaway from this proof and observation is that it is not possible to build
a computer program that can solve any problem - some problems are undeciable,
that is, unsolveable.

[Church-Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis)

[computability](https://en.wikipedia.org/wiki/Computability_theory)

[Turing Machines](https://en.wikipedia.org/wiki/Turing_machine) These are of
special importance in Computer Science!

[Visual example of a Turing Machine as formula](https://cs.stackexchange.com/questions/11542/how-to-construct-and-write-down-a-Turing-machine-for-a-given-language)

[Gödel's Incompleteness
Theorem](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems)


## Exercises

* Where do you see boolean algebra used in JavaScript?

* What are some examples of logical symbols in JavaScript?

* The Analytical Engine was never constructed. Why not?
