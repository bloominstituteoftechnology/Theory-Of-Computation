# Exercises

## Write a Regular Expression

Write a regex that matches a `1`, followed by 0 or more `2`s, followed by 0-1 `3`s.

```
12*3?

12*3?
```

## Write a Regular Expression

Write a regex that matches any one or two digit number, followed by a space,
followed by the word `monkey`, followed by 0 or 1 `s`s.


```
[0-9]{1,2} monkeys?
```

## Convert Regex to State Machine Diagram

Draw a state machine diagram for the following regex that matches a clock time.

    [0-9]?[0-9]:[0-9][0-9] [AP]M

For this, it's OK to have a single transition for all the digits, e.g. "Go from
start state to state 1 if the input is `[0-9]` or ε":

#### States:
1. START - Start
2. MTCH1 - Match 1
3. MTCH2 - Match 2
4. ....
5. CMPLT - Completed
6. FAULT - Fauled to match correctly (when would we use a state like this?)

```

+-[START]--+                 +-[MTCH1]---+                 +-[MTCH2]-+              +-[MTCH3]----+              +-[MTCH4]----+
| Start    |>----[ 0-9 ]---> | Number    |>--+--[ 0-9 ]--> | Number  |>--[ ':' ]--> | Colon Char |>--[ 0-9 ]--> | Space Char |>--[ 0-9 ]--+
| Match    |>-+              +-----------+   |             +---------+              +------------+              +------------+            |
+----------+  |                              |                                                                                            |
              +---[ ε ]----------------------+                                                                                            |
                                                                                                                                          |
                                            +-[MTCH7]-+            +-[MTCH6]-+              +-[MTCH5]-+                                   |
                                       +---<| Morning | <--[ A ]--<| Number  | <--[ 0-9 ]--<| Number  | <---------------------------------+
+-[CMPLT]-----+        +-[MTCH8]--+    |    +---------+            +---------+              +---------+
| Final State | <-----<| End char | <--+                               v    
+-------------+        +----------+    |    +-[MTCH7]-+                |
                                       +---<| Evening | <--[ P ]-------+    
                                            +---------+                 
```