# Write a dialect of Javascript using Backus-Naur Form 
[Thomson's Lucid Chart](https://www.lucidchart.com/documents/edit/c7e701b5-f2f4-4c20-ab8b-4fea175c5cf5/0?shared=true&)

1. Read "BananaScript.bnf" file from an argument to a node program BananaTranspiler.js
2. Read each line of file, separating by tokens, that is: stuff in <>, :=, |
3. Put the tokens from the read into a hash table "BNF_table" by the left side of the line delimited by :=
4. Read "BananaScript.bs" file containing custom bananascript programming language
5. Parse it using a pushdown automata and accumulate the results into a string variable program
6. let bananascript_executable = eval(program);
7. program();

bananaScriptTest.bs
```
make x be 5
go bananas x bigger than 0
  shout x
  enshrinken x
end
```

```
 go bananas x bigger than 0
   expressions
 end
```

a COOLER banascript BNF
```html
<expressions> := <expression+\>
<expression> := <type> <name> = <value>
                <while-loop>
                <print> <name>
                <print> <value>
<conditional> := <name> <lt> <value>
                 <name> <gt> <value>
                 <name> <eq> <value>
<while-loop> := <while> <conditional> <expressions>
<while> := go bananas <conditional>
<type> := make <name> be <value>
<name> := string
<value> := integer or a string 
<print> := shout <name> | shout <value>
<lt> := littler than
<gt> := bigger than
<eq> := same as
<decrement> := enshrinken <type integer> <value>
<end> := SRS BSNS
```

TODO:
```c
// USE A key: value dict to TRANSPILE

// example BananaScript program
// BANANA SCRIPT
make a be 'Welcome to Banana Script'
shout a
shout 'some string value'
shout 'some integer value'
make x be 5
go bananas x bigger than 0
  shout x
  enshrinken x
end
```

```js
// TRANSPILE TO ES5 JAVASCRIPT
var a = 'Welcome to Banana Script';
console.log(a);
console.log('some value');
console.log(32);
var x = 5;
var y = 0;
while (x > y) {
  console.log(x);
  x--;
}
```

***

## FIRST PASS Backus-Naur Form of a CFG:
### Leaving this here for now, cuz I am not sure if we want to keep the Integer vs String typing?
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
<type> := d_int | d_string | banana <!-- SHOLD WE KEEP TYPE INT/STR? --->
<name> := string
<value> := integer or a string 
<print> := 'console.log(<name>)' | 'console.log(<value>)'
<lt> := '<'
<gt> := '>'
<eq> := '='
<while> := 'while (<conditional>)'
```

## JESH and PATRICK ad hoc rules (for now)
1. strings must use double-quotes
2. no whitespaces in strings
