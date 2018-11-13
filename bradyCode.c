/************************************
 *
 *   CREATE & DESTROY FUNCTIONS
 *
 ************************************/

/*****
 * Allocate memory for a new state machine
 *
 * TODO: FILL THIS IN
 *****/
StateMachine *create_state_machine (int state_capacity, int transition_capacity) {
  // Allocate memory for state machine struct
  StateMachine *sm = malloc(sizeof(StateMachine));

  // Current state should default to NULL
  sm->current_state = NULL;

  // num_states and num_transitions should default to 0
  sm->num_states = 0;
  sm->num_transitions = 0;

  // Allocate memory for states
  sm->state_capacity = state_capacity;
  sm->states = calloc(state_capacity, sizeof(State *));

  // Allocate memory for transitions
  sm->transition_capacity = transition_capacity;
  sm->transitions = calloc(transition_capacity, sizeof(Transition *));

  return sm;
}

/*****
 * Allocate memory for a new state and initialize values
 *
 * TODO: FILL THIS IN
 *****/
State *create_state(char *name) {
  // Allocate memory for state struct
  State *state = malloc(sizeof(State));

  // Allocate memory and copy state name (hint: use strdup)
  // strdup => malloc + strcpy
  state->name = strdup(name);

  // Set is_terminal to default of 0
  state->is_terminal = 0;

  return state;
}

/*****
 * Allocate memory for a new transition and initialize values
 *
 * TODO: FILL THIS IN
 *****/
Transition *create_transition(char *name, State *origin, State *destination) {
  // Allocate memory for transition struct
  Transition *transition = malloc(sizeof(Transition));

  // Allocate memory and copy transition name (hint: use strdup)
  transition->name = strdup(name);

  // Set origin and destination states
  transition->origin = origin;
  transition->destination = destination;

  return transition;
}

/*****
 * Free memory for a state
 *
 * TODO: FILL THIS IN
 *****/
void destroy_state(State *state) {
  if (state != NULL) {
    free(state->name);
    free(state);
  }
}

/*****
 * Free memory for a transition
 *
 * TODO: FILL THIS IN
 *****/
void destroy_transition(Transition *transition) {
  if (transition != NULL) {
    free(transition->name);
    free(transition);
  }
}

/*****
 * Free memory for a state machine and all of its states and transitions
 *
 * TODO: FILL THIS IN
 *****/
void destroy_state_machine(StateMachine *sm) {

  // Free all transitions
  for (int i = 0 ; i < sm->transition_capacity ; i++) {
    destroy_transition(sm->transitions[i]);
  }

  // Free all states
  for (int j = 0 ; j < sm->state_capacity ; j++) {
    destroy_state(sm->states[j]);
  }

  // Free state machine
  free(sm->transitions);
  free(sm->states);
  free(sm);

}