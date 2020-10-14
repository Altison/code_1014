def on_forever():
    for y in range(6):
        for x in range(6):
            led.plot(0, y)
            basic.pause(100)
    basic.pause(100)
    for x2 in range(6):
        for y2 in range(6):
            led.unplot(5 - x2, 5 - y2)
    basic.pause(100)
basic.forever(on_forever)
