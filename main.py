brighth = 0
degree = 0

def on_button_pressed_a():
    global brighth
    brighth = input.light_level()
    if brighth < 100:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for index in range(4):
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global degree
    degree = input.compass_heading()
    if degree < 45 or degree > 135:
        basic.show_string("N")
        basic.show_arrow(ArrowNames.NORTH)
    elif degree < 135:
        basic.show_string("E")
        basic.show_arrow(ArrowNames.EAST)
    elif degree < 225:
        basic.show_string("S")
        basic.show_arrow(ArrowNames.SOUTH)
    else:
        basic.show_arrow(ArrowNames.WEST)
        basic.show_string("W")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
