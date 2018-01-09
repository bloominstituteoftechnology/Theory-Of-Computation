# AI State Machine

## Prompt:
> Draw a state machine diagram for a video game AI

## Requirements:
> Video game AIs can exist in a lot of states, e.g. idling, bored, running, shooting.

1. Come up with a list of 4 states an AI can be in.
2. Figure out the transitions between those st

## AI States:
1. SPWN - Spawned
2. WAIT - Waiting
3. CHAS - Moving Towards Enemy (Moving Towards Seen Player)
4. REDY - Readying for Attack (drawing back weapon)
4. DAMG - Is Hit (Hit?)
5. ATTK - Attacking (Attack)
6. RECT - Wince

## Diagram
```
                                                                                                       +-------------------------------------[ Not within 1 tile of Player ]-----------+
                                                                                                       V                                          +--------------[ ε ]------------+    |
                                                                                             +-[CHAS]------+                                      |                               |    |
  +-[SPWN]--+                            +-[WAIT]--+                                         | Moves Self  |>----[ Is within 1 tile of Player ]----------------------+            ^    |
  | Spawned |>-----[ Time Elapsed ]----> | Waiting |>---[ Sees Player within 5 Tiles ]-----> | towards     |                                      |                  |   +-[ATTK]---+  |
  +---------+                            +---------+                                         | Seen Player |>--[ Is Hit ]-+                       V                  +-> | Attack   |>-+
                                            v    ^                                           +-------------+              |               +-[REDY]----------+        |   +----------+
                                            |    |                                                v  ^                    |               | Ready to Attack |>-[ ε ]-+           v
                                            |    |                                                |  |                    |               +-----------------+                    |
                                            |    |                                                |  |                    |                            v                         |
                                            |    |                                                |  |                    |                   [ Is Hit ]                         |
                                            |    |                                                |  |                    |                            |                         |
                                            |    |                                                |  |                    |                            V                         |
                                            |    |                                                |  |                    |                    +-[DAMG]--+                       |
                                            |    |                                                |  |                    +------------------> | Is Hit  |                       |
                                            |    |                                                |  |                                         +---------+                       |
                                            |    |                                                |  |                                            v    ^                         |
                                            |    |                                                |  |                              [ Take Damage ]    |                         |
                                            |    |                             [ Can't See Player ]  |      +-[RECT]-------------------+          |    |                         |
                                            |    |                                                |  +------| Winces & waits 2 seconds | <--------+    |                         |
                                            |    |                                                |         +--------------------------+               |                         |
                                            |    +------------------------------------------------+--------------------------------------------------------[ Loses Player ]------+
                                            |                                                                                                          |
                                            +------[ Hit By Range Attack ]-----------------------------------------------------------------------------+
```
