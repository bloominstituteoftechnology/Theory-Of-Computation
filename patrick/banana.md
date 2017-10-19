# Write a dialect of Javascript using Backus-Naur Form 
1. Read "BananaScript.bnf" file from an argument to a node program BananaTranspiler.js
2. Read each line of file, separating by tokens, that is: stuff in <>, :=, |
3. Put the tokens from the read into a hash table "BNF_tabke" by the left side of the line delimited by :=
4. Read "BananaScript.bs" file containing custom bananascript programming language
5. Parse it using a pushdown automata and accumulate the results into a string variable program
6. let bananascript_executable = eval(program);
7. program();

## Backus-Naur Form of a CFG:
```html
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
```
