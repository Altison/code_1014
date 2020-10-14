input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 5; y++) {
        for (let x = 0; x <= 5; x++) {
            if (y == 1) {
                break;
            }
            led.plot(x, y)
            basic.pause(100)
        }
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let x = 0; x <= 5; x++) {
        for (let y = 0; y <= 5; y++) {
            if (x % 2 == 1) {
                led.unplot(5 - x, 5 - y)
                basic.pause(100)
            } else {
                led.unplot(5 - x, y)
                basic.pause(100)
            }
        }
    }
    basic.pause(100)
})
