let brighth = 0
let temtepteteteet_eteteetee = 0
let degree = 0
input.onButtonPressed(Button.A, function () {
    brighth = input.lightLevel()
    if (brighth < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    temtepteteteet_eteteetee = input.temperature()
    if (temtepteteteet_eteteetee < 36.5) {
        basic.showString("safe")
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(100)
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
    basic.pause(100)
    for (let index = 0; index < 3; index++) {
        music.playTone(294, music.beat(BeatFraction.Double))
        basic.pause(100)
    }
    basic.pause(100)
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    degree = input.compassHeading()
    if (degree < 45 || degree > 135) {
        basic.showString("N")
        basic.showArrow(ArrowNames.North)
    } else if (degree < 135) {
        basic.showString("E")
        basic.showArrow(ArrowNames.East)
    } else if (degree < 225) {
        basic.showString("S")
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
        basic.showString("W")
    }
})
