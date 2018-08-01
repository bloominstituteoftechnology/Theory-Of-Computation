# Story Time!
* one of the founders of calculus questioned whether or not a machine could be created to automate his job. Is there a machine that could answer any question? Litmus was his name (sp?) mid-18th century

    - There was not anything he could do to implement his thoughts until the Industrual Revolution. 
* Charles Babbage
    - mathematician and inventor who created a bunch of mechanical calculators. 
    - The machines that he made were very niche.
    - The difference engine he made just tabulated polynomial functions. Very steampunk. 
    - Babbage asked if he could take this in a more general direction. Can we create a machine that was a general purpose calculator. 
    - He drew up plans for the analytical engine. The first design for a real computer. Never physically created. 
    - __Ada Lovelace__ - the first computer programmer - wrote programs for this theoretical analytical engine. Attributed as first computer programmer. 
* At this point, we are building machines to solve a single problem. Player piano is an example of an extremely niche computer. A jacquard loom simplifies the process of manufacturing textiles. 

* Alan Turing ('Imitation Game' guy)
* most famous contribution is his paper that posits coming up with a general purpose computer. 
    - He took Babbage's idea and boiled it down to its simplest components. 
    - __Turing Machine__
        - they are able to perform any sort of arbitrary instruction by a programmer. 
        - Three operations: read, write, move. 
        - it needed some input = tape with cells (like film cells). Cells = memory. 
        - Had a reader that would get input from the memory allowed it to process instructions. 
    - __Turning Complete__
        - a language is Turing Complete if it can run all of the operations of a Turing Machine. 

    https://en.wikipedia.org/wiki/Turing_machine_gallery

* Alonzo Church
    - lambda calculus
        - essentially anonymous functions.  It's a formal system in mathematical logic for expressing computation based on function abstraction and application using variable binding and substitution. It is a universal model of computation that can be used to simulate any Turing machine. It was first introduced by mathematician Alonzo Church in the 1930s as part of his research of the foundations of mathematics.
    - Lambda Calc is Turing Complete
    - Church-Turing Thesis

* John von Neumann
    - he came up with the architecture of the computer as we know it today. Then it was known as ALU - arithmetic logic unit. 
* John Nash, Jr. ('A Beautiful Mind' guy)
    - came up with the model we use to compute Big O notation. He came up with the way we come up with runtime complexity. 

# P versus NP problem
P = polynomial time

NP = non-deterministic polynomial time

```
O nˆk = polynomial 

O kˆn = exponential 

```
- exponential quickly becomes unfeasible as n gets larger. 

    - Traveling Salesman is an example. 

    - Code-breaking(á la Alan Turing) also falls under this if you don't have secret key. 

    - Prime factorization

- Let's imagine a space with __ALL__ possible problems. __P__ is a subset of __ALL__ where problems are solved in polynomial time. __NP__ is also a subset of __ALL__ where there are problems that are easy to verify but hard to solve and more than likely solved in exponential time. 
    - To solve NP problems, what if we had some sort of machine that in parallel just verified all the possible permutations (instead of traversing linked-list one branch at a time?). A non-deterministic machine can do this. 
    - __NP-complete__ problems are problems that share the same structure and have a very similar solution. 
    - __NP-Hard__ problems are problems that are hard to solve and hard to verify. Traveling Salesman falls under this class. 

No one has definitely decided that P is indeed equal to NP. 

