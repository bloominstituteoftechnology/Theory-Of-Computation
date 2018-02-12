1. Lambda Calculus: formal mathmatical system for modeling computation. It is able to support the same computational ablities as a Turing machine. Calculus is how logic and formal analysis can describe behavior of things. 

2. Turing Machines: mathmatical method of computation that defines an abstract machine. Turing machines proce fundamental limitations of the power of mechanical computation in that their minimalistic design makes tham unsuitable for computation in practice. 

3. Finite state machine: The basis of which the rest of computation is built upon. State machine are just collection of states and transitions between the states. The transition are events which cause one state to become another state. e.g You were sad but got a raise so now you are happy. start state = sad, transition/event = raise, terminal state = happy;

4. Regular Expressions: A sequence of characters that define a search pattern. They can be directly converted into state machines and vice versa and is known as consuming a certain type of character. 

5. Backus Naur Form: Used to describe grammer and is a concise and compact way of describing a exact syntax of a language. 

6. State machines: A collection of states and transitions between the states. The transitions represent events that have occurred that triggers the change from one state to another. Usually there is a start state which is the state you initalize to when you initialize state machine. This also means there is a terminal state which is the state when the state machine terminates.
    * The Greek letter E or epsilon is used to denote the state transition for which no event is required for the transition to take place. 
    This means that transition events are not necessary in order for a state to change. Epsilon allows you to choose to get to another state without waiting for an event to occur while random is just going from one state to another random state. It is more deliberate than random. 
        e.g Epsilon example would be entering 30 cents for a soda, getting back 5 cent change and having 25 cents. It would get the end state without having additional events occur as you already had 25 cents.... 