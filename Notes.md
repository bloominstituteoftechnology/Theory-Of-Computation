1. Lambda Calculus: formal mathmatical system for modeling computation. It is able to support the same computational ablities as a Turing machine. Calculus is how logic and formal analysis can describe behavior of things. 

2. Turing Machines: mathmatical method of computation that defines an abstract machine. Turing machines proce fundamental limitations of the power of mechanical computation in that their minimalistic design makes tham unsuitable for computation in practice. 

3. Finite state machine: The basis of which the rest of computation is built upon. State machine are just collection of states and transitions between the states. The transition are events which cause one state to become another state. e.g You were sad but got a raise so now you are happy. start state = sad, transition/event = raise, terminal state = happy;

4. Regular Expressions: A sequence of characters that define a search pattern. They can be directly converted into state machines and vice versa and is known as consuming a certain type of character. 

5. Backus Naur Form: Used to describe grammer and is a concise and compact way of describing a exact syntax of a language. 

6. State machines: A collection of states and transitions between the states. The transitions represent events that have occurred that triggers the change from one state to another. Usually there is a start state which is the state you initalize to when you initialize state machine. This also means there is a terminal state which is the state when the state machine terminates.
    * The Greek letter E or epsilon is used to denote the state transition for which no event is required for the transition to take place. 
    This means that transition events are not necessary in order for a state to change. Epsilon allows you to choose to get to another state without waiting for an event to occur while random is just going from one state to another random state. It is more deliberate than random. 
        e.g Epsilon example would be entering 30 cents for a soda, getting back 5 cent change and having 25 cents. It would get the end state without having additional events occur as you already had 25 cents.... 

7. State machines and regexs
    g        o        a        l
s -----> 1 -----> 2 -----> 3 -----> A
  [^o] (not o)
s <----- 1
     [^a] (not)
s <-------------- 2 
         [^l](not)
s <----------------------- 3

When using x amount of o's, it loops through the same state again and again until another char is inputed

    g        o        o        o        a       l
s -----> 1 -----> 2 -----> 2 -----> 2 -----> 3 -----> A

If input is not 'a' or 'o', go back to the original state

            [^ao] ( not 'a' or 'o')
s <----------------------------------------- 3


Each letter we process gets consumed by state machine so it can transition from one state to the next

 goal
 gooal
 goooooooal
 gol
 goool

 write a regex that matches each of these expressions
 e.g I am the goalie
/g/        returns 1 g;
/goa/      strictly returns 'goa' from the word goalie

/go+ a/    matches one or more o's, matches strictly with one 'a'; 
note that '+' comes after the letter it affects not before

/go+ a? l/ maches one or more 'o', 0 or 1 'a' and strictly 1 'g' and one 'l'

/ab(x+ |y)z/ strict ab, 1 or more x or strict y (exclusive or as it cannot be both), one strict l;
parenthesis used to make sure that only y is included in 'or' rather than yz

/([a-z]+) - ([a-z]+)/  matches one or more a-z , matches the char '-', matches another one or more a-z

/(w.+ b) / '+' means comsume one or more chars with '.' meaning any char. Even adding b will be consumed by '.'
to get out of the state use 'Lazy' or '?'. '?' stops greedy by being Lazy by moving onto the next state machine

/(w.+ ?b)/ strict w, 1 or more any chars, stop consuming chars and move on if char is 'b'

Side note: if trouble install react on the mac, use 'sudo' so you can bypass the whole permission problem
e.g sudo npm install -g create-react-app

