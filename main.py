degree = 0

def on_forever():
    global degree
    degree = input.compass_heading()
    if degree < 45 or degree >= 315:
        basic.show_string("N")
    elif degree < 135:
        basic.show_string("E")
    elif degree < 225:
        basic.show_string("S")
    else:
        basic.show_string("W")
basic.forever(on_forever)
