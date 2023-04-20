input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    modus += 1
    led.unplot(modus - 1, 0)
    led.plot(modus, 0)
    if (modus == 4) {
        basic.clearScreen()
        modus = 0
        led.plot(modus, 0)
    }
})
function liesknöpfe () {
    if (input.buttonIsPressed(Button.A)) {
        knopfA = 1
    } else {
        knopfA = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        knopfB = 1
    } else {
        knopfB = 0
    }
}
let knopfB = 0
let knopfA = 0
let modus = 0
servos.P1.setAngle(180)
basic.forever(function () {
    liesknöpfe()
    if (modus == 0) {
        if (knopfA == 1) {
            music.playMelody("G E - - G E - - ", 120)
            music.playMelody("D C D C - - - - ", 120)
        }
    }
    if (modus == 1) {
        if (knopfA == 1) {
            basic.showString("Hello!")
            led.plot(modus, 0)
        }
    }
    if (modus == 2) {
        if (knopfA == 1) {
            servos.P1.setAngle(0)
            basic.pause(1000)
        }
        if (knopfA == 0) {
            servos.P1.setAngle(180)
        }
    }
})
