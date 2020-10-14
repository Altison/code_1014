basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        if (index == 4) {
            continue;
        }
        basic.showNumber(index)
        basic.pause(100)
    }
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
})
