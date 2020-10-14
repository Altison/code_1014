def on_button_pressed_a():
    for y in range(6):
        for x in range(6):
            if y == 1:
                continue
            led.plot(x, y)
            basic.pause(100)
    basic.pause(2000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for x2 in range(6):
        for y2 in range(6):
            if x2 % 2 == 1:
                led.plot(5 - x2, 5 - y2)
            else:
                led.plot(5 - x2, 0)
                led.unplot(0, y2)
            basic.pause(100)
    basic.pause(100)
input.on_button_pressed(Button.B, on_button_pressed_b)
