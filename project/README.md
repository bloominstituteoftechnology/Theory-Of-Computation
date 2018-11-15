# State Machine in C

Your project for the next two days is to build a state machine in C. Some code has been filled out for you in `state_machines.c` including struct definitions and test utility functions. You will be filling out the rest of the functions.

Like last week, type `make` and `./state_machines` to run your code. Type `make tests` to run the automated test suite.

## Day 1
Fill out the following create/destroy functions:
`create_state_machine`
`create_state`
`create_transition`
`destroy_state`
`destroy_transition`
`destroy_state_machine`

Be sure to include a matching `free` call for every `malloc` call. Note that functions like `calloc` and `strdup` also allocate memory and need to be freed as well.


## Day 2
Fill out the following state machine functions:
`sm_add_state`
`sm_add_terminal_state`
`sm_add_transition`
`sm_do_transition`

Tests should now pass.

