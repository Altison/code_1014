degree = 0

def on_forever():
    global degree
    degree = input.compass_heading()
basic.forever(on_forever)
