

S ->                  1 ->            2 ->              3
Actuator in           left            right             both
neutral position      blink           blink             blink
      ^                |                |                 |
      |  _____________                  |                 |
                                        |                 |
      ^                                 |                 |
      | ________________________________                  |
                                                          |
      ^                                                   |
      | __________________________________________________

S: blinker actuater in neutral position (similar to DPDT switch)

S1: left blink
    Actuator is depressed
      Return to 0:
        Actuator is lifted into neutral position
        OR
        Wheel is turned anti-clockwise >90 degrees, then returns passing the 90 degree mark while turning clockwise

S2: right blink
    Actuator is lifted
      Return to 0:
        Actuator is depressed into neutral position
        OR
        Wheel is turned clockwise >90 degrees, then returns, passing the 90 degree mark while turning anti-clockwise

S3: both blink
    Hazard button is depressed closing the circuit (on/off switch)
      Return to 0:
        Hazard button is depressed opening the circuit