#include <stdio.h>
/*Author: Jonathan Jamel Holloway  PUrpose to practice more C programming and build a state machine Date 11-13-18*/
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>
//https://repl.it/@codejoncode/state-machine-lecture    working correctly at repl.it 

/*Structures*/
typedef struct State {//requires a name. 
  char*name; 
  int is_terminal;
}State; //meeting the requirement 

typedef struct Transition {
  char *name; 
  struct State *origin; 
  struct State *destination; 
}Transition; 

typedef struct StateMachine {
  struct State *current_state; 

  int state_capacity; //How many states can the state machine hold
  int num_states; // how many states does the state machine currently hold.
  struct State **states;

  int transition_capactity; //How many transitions can this state machine hold? 
  int num_transitions; //How many transitions does the state machine currently hold? 
  struct Transition **transitions; 
}StateMachine; 
/*End of the Structures*/

/* Function prototypes*/
StateMachine *create_state_machine(int state_capacity, int transistion_capacity);
State *create_state(char *name);
Transition *create_transition(char *name, State *origin, State *destination);
void destroy_state(State *state);
void destroy_state_machine(StateMachine *sm);
void destroy_transition(Transition *transition);

State *sm_add_state(StateMachine *sm, char *state_name);
Transition *sm_add_transition(StateMachine *sm, char *transition_name,char *origin_state_name, char *destination_state_name);
State *sm_do_transition(StateMachine *sm, char *transition_name);
State *sm_add_terminal_state(StateMachine *sm, char *state_name);

/*End of the prototypes*/

//Utility Functions 
/*****
 * Utility function to print the current states and its transitions
 *****/
void sm_print_state_and_transitions(StateMachine *sm) {
  printf("---------\n\nCurrent State: %s\n", sm->current_state->name);
  if (sm->current_state->is_terminal) {
    printf("Terminating");
  } else {
    printf("\nTransitions:\n");
    for (int i = 0 ; i < sm->transition_capactity ; i++) {
      if (strcmp(sm->transitions[i]->origin->name, sm->current_state->name) == 0) {
        printf("%s -> %s\n", sm->transitions[i]->name, sm->transitions[i]->destination->name);
      }
    }
  }
  printf("\n");
}

/*****
 * Utility function to accept user inputs for state transitions
 *****/
void process_input(StateMachine *sm) {

  int max = 128;
  char *input_buffer = malloc(max * sizeof(char));

  while (1) {
    printf("Enter a transition\n~> ");

    fgets(input_buffer, max, stdin);
    for (int i = 0 ; input_buffer[i] != 0 ; i++) {
      if (input_buffer[i] == '\r' || input_buffer[i] == '\n') input_buffer[i] = 0;
    }

    sm_do_transition(sm, input_buffer);
    sm_print_state_and_transitions(sm);

    if (sm->current_state->is_terminal) {
      break;
    }
  }

  free(input_buffer);

}
//End of Untily functions 


/*Main Section */
int main(void) {
  StateMachine *sm = create_state_machine(10, 15);

  sm_add_state(sm, "START");
  sm_add_state(sm, "5");
  sm_add_state(sm, "10");
  sm_add_state(sm, "15");
  sm_add_state(sm, "20");
  sm_add_terminal_state(sm, "SODA");
  sm_add_terminal_state(sm, "SODA + NICKEL");
  sm_add_terminal_state(sm, "SODA + DIME");
  sm_add_terminal_state(sm, "SODA + NICKEL + DIME");
  sm_add_terminal_state(sm, "SODA + DIME + DIME");

  sm_add_transition(sm, "NICKEL", "START", "5");
  sm_add_transition(sm, "DIME", "START", "10");
  sm_add_transition(sm, "QUARTER", "START", "SODA");
  sm_add_transition(sm, "NICKEL", "5", "10");
  sm_add_transition(sm, "DIME", "5", "15");
  sm_add_transition(sm, "QUARTER", "5", "SODA + NICKEL");
  sm_add_transition(sm, "NICKEL", "10", "15");
  sm_add_transition(sm, "DIME", "10", "20");
  sm_add_transition(sm, "QUARTER", "10", "SODA + DIME");
  sm_add_transition(sm, "NICKEL", "15", "20");
  sm_add_transition(sm, "DIME", "15", "SODA");
  sm_add_transition(sm, "QUARTER", "15", "SODA + NICKEL + DIME");
  sm_add_transition(sm, "NICKEL", "20", "SODA");
  sm_add_transition(sm, "DIME", "20", "SODA + NICKEL");
  sm_add_transition(sm, "QUARTER", "20", "SODA + DIME + DIME");

  sm_print_state_and_transitions(sm);

  process_input(sm);

  destroy_state_machine(sm);
  return 0;
}
/*End of Main Section*/


/*Functions*/

//Allocate memory for a new  state machine
StateMachine *create_state_machine(int state_capacity, int transistion_capacity)
{
  //Allocate memory for state machine struct 
  StateMachine *sm = malloc(sizeof(StateMachine));
  // Current state should default to NULL
  sm->current_state = NULL; 
  // num_states and num_transitions should default to 0
  sm->num_states = 0; 
  sm->num_transitions = 0; 
  // struct State **states; size of a pointer is different than the size of a state. 
  //sizeof(State) = sizeof(char*) + sizeof(int)
  //sizeof(State *) = sizeof(State *) = 4
  // Allocate memory for states

  // sm->states = malloc(sizeof(State *) * state_capacity); 
  sm->state_capacity= state_capacity; 
  sm->states = calloc(state_capacity, sizeof(State *));

  // Allocate memory for transitions
  sm->transition_capactity = transistion_capacity; 
  sm->transitions = calloc(transistion_capacity, sizeof(Transition *));

  return sm; 
}

//Allocate memory for a new state and initialize values
State *create_state(char *name) {
  // Allocate memory for state struct
  State *state = malloc(sizeof(State));
  // Allocate memory and copy state name (hint: use strdup)
  state->name = strdup(name); //the difference between strdup and strcpy is strdup will malloc under the hood  strcpy 
  //^state->name malloc(sizeof(char *) * sizeeof(name)) then it does a strcpy 
  // Set is_terminal to default of 0
  state->is_terminal = 0; 

  return state; 
}

//Allocate memory for a new transition and initialize values
Transition *create_transition(char *name, State *origin, State *destination) {
  // Allocate memory for transition struct
  Transition *transistion = malloc(sizeof(Transition));
  // Allocate memory and copy transition name (hint: use strdup)
  transistion->name = strdup(name); 
  // Set origin and destination states
  transistion->origin = origin; 
  transistion->destination = destination; 
  //We do not have to malloc these two because we already reserved the space when we malloc(sizeof(Transition))

  return transistion; 
}

//Free memory for a state
void destroy_state(State *state) {
  
  if(state != NULL){
    free(state->name);
    free(state);
  }
}
void destroy_transition(Transition *transition) {
  if(transition != NULL){
    free(transition->name);
    free(transition);
  }
}

//Free memory for a state machine and all of its states and transitions
void destroy_state_machine(StateMachine *sm) {
  //malloc calloc  strdup  all needs to be free'd. 
  
  // Free all transitions
  for(int i = 0; i< sm->transition_capactity ; i++){
    destroy_transition(sm->transitions[i]);
  }

  // Free all states
  for (int j = 0; j< sm->state_capacity; j++){
    destroy_state(sm->states[j]);
  }
  
  // Free state machine
  free(sm->transitions); 
  free(sm->states);
  free(sm); 
}

//Add in Day 2 functions below.
/************************************
 *
 *   STATE MACHINE FUNCTIONS
 *
 ************************************/

/*****
 * Add a state to the state machine
 *
 * TODO: FILL THIS IN
 *****/
State *sm_add_state(StateMachine *sm, char *state_name) {
  // Return NULL and print an error if number of states is over capacity
  if(sm->state_capacity == sm->num_states){
    printf("\nError, StateMachine already at capacity\n");
    return NULL; 
  }  

  // Return NULL and print an error if state name is not unique
  for(int i = 0; i<sm->num_states; i++){
    if(strcmp(state_name, sm->states[i]->name) == 0){
      printf("\nError, You have to choose a unique ");
      return NULL; 
    }
  }
  // Create a new state and add it to the state machine
  State *state = create_state(state_name); 
  //^created newState 
  sm->states[sm->num_states] = state; 
  //Adding to the state. 
  sm->num_states++; 
  //^increment the machine number of states 


  // Initialize the state machine's current state if it hasn't been set yet
  if (sm->current_state == NULL){
    sm->current_state = state; 
  }
  // Return the state
  return state;
}

/*****
 * Add a terminal state to the state machine
 * (terminal states will exit the state machine)
 *
 * TODO: FILL THIS IN
 *****/
State *sm_add_terminal_state(StateMachine *sm, char *state_name) {
  // Add a state to the state machine
  // HINT: you can do this via the sm_add_state() function
  State *state = sm_add_state(sm, state_name);
  

  // If the new state is valid, set is_terminal to 1
  if(state != NULL){
    state->is_terminal = 1; 
    printf("\n %s is terminal\n", state->name); 
  }
    

  return state;
}

/*****
 * Add a transition to the state machine
 *
 * TODO: FILL THIS IN
 *****/
Transition *sm_add_transition(StateMachine *sm, char *transition_name,
                              char *origin_state_name, char *destination_state_name) {

  // Return NULL and print an error if number of transitions is over capacity
  if(sm->transition_capactity == sm->num_transitions){
    printf("\nError transistion capacity has been met\n");
    return NULL; 
  }

  // Declare origin_state and destination_state
  

  // Search the state machine for states with matching names for both origin and destination
  // bool found_destination = false; 
  // bool found_origin = false; 
  State *found_destination = NULL; 
  State *found_origin = NULL; 

  
    for(int i = 0; i<sm->num_states; i++){
    // If both origin and destination states have been found,
    // Create a new transition and add it to the state machine
    // printf("%s", sm->states );
    if(strcmp(destination_state_name, sm->states[i]->name) == 0)
      found_destination = sm->states[i]; 
    
    if(strcmp(origin_state_name, sm->states[i]->name) == 0)
      found_origin = sm->states[i]; 
     
    //I put this inside of the loop because if I have found them both no reason to keep on looping. 
    if (found_origin != NULL && found_destination != NULL){
      // State *origin_state = create_state(origin_state_name);
      // State *destination_state = create_state(destination_state_name);
      Transition *transition = create_transition(transition_name, found_origin, found_destination);
      sm->transitions[sm->num_transitions] = transition; 
      sm->num_transitions++; 
      //create the transition  //add to the state machine  // increase the num_transitions...
      return transition; 
    }
   }
  
  printf("\nUnable to create transistion\n");
  return NULL; 
  // Otherwise, print an error and return NULL

}


/*****
 * Execute the transition that matches the transition_name
 * then update the state machine's current_state accordingly
 *
 * TODO: FILL THIS IN
 *****/
State *sm_do_transition(StateMachine *sm, char *transition_name) {

  // Search the state machine for a valid transition:
  //   The transition's origin state should match the state machine's current_state
  
    for(int j = 0; j < sm->num_transitions; j++){
    if(strcmp( sm->transitions[j]->origin->name, sm->current_state->name ) == 0 && strcmp(transition_name, sm->transitions[j]->name)== 0){
      printf("\nUpdating the currentState to %s\n", sm->transitions[j]->name);
      printf("\n current state is terminal? %d", sm->transitions[j]->destination->is_terminal );
      sm->current_state = sm->transitions[j]->destination;
      return sm->current_state; 
    }


  }
  //   and the transition's name should match the given name

  // If a valid transition is found, update the state machine's current state

  // If a valid transition is not found, print an error and return NULL;
  printf("\nInvalid transition\n");
  return NULL; 

}
