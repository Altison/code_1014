let degree = 0
basic.forever(function () {
    degree = input.compassHeading()
    if (degree < 45 || degree >= 315) {
        basic.showString("N")
    } else if (degree < 135) {
        basic.showString("E")
    } else if (degree < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
