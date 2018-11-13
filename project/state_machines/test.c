#include <stdio.h>
#include <stdlib.h>
#include <string.h>


typedef struct State {
  char *name;
  int is_terminal;  // 1 if this is a terminating state; 0 otherwise
} State;

typedef struct Transition {
  char *name;
  struct State *origin;
  struct State *destination;
} Transition;

typedef struct StateMachine {
  struct State *current_state;

  int state_capacity;  // How many states can this state machine hold?
  int num_states;  // How many states does the state machine currently hold
  struct State **states;

  int transition_capacity;  // How many transitions can this state machine hold?
  int num_transitions;  // How many transitions does the state machine currently hold
  struct Transition **transitions;

} StateMachine;



/*****
 * Allocate memory for a new  state machine
 *
 * TODO: FILL THIS IN
 *****/
StateMachine *create_state_machine (int state_capacity, int transition_capacity) {
  // Allocate memory for state machine struct
  struct StateMachine *stateMemory = malloc(sizeof(state_capacity)); 
  // Current state should default to NULL
  current_state->name="Frank"; 
  // num_states and num_transitions should default to 0

  // Allocate memory for states

  // Allocate memory for transitions

}



int main(void)
{

  StateMachine *sm = create_state_machine(10, 15);


  return 0;
}


