def on_xclaps_capture(count):
    displayNum(count, 2, "triple clap followed by " + str(count))
claps.on_xclaps_capture(3, on_xclaps_capture)

def on_clap_instance():
    global clapCount
    clapCount += 1
    serial.write_line("clap instance! (" + ("" + str(clapCount)) + ")")
    led.plot(4, 4)
    basic.pause(200)
    led.unplot(4, 4)
claps.on_clap_instance(on_clap_instance)

def on_on_onelap():
    displayNum(1, 0, "single clap")
claps.on_onelap(on_on_onelap)

def on_triple_clap():
    displayNum(3, 0, "triple clap")
claps.on_triple_clap(on_triple_clap)

def on_on_xclap():
    displayNum(4, 0, "quadruple clap")
claps.on_xclap(4, on_on_xclap)

def on_double_clap():
    displayNum(2, 0, "double clap")
claps.on_double_clap(on_double_clap)

# flashes on leds on a row to show a number. will overflow onto row beneath
def displayNum(num: number, row: number, serialStr: str):
    serial.write_line(serialStr)
    index = 0
    while index <= num - 1:
        led.plot(index, row)
        index += 1
    if num > 5:
        index2 = 0
        while index2 <= num - 6:
            led.plot(index2, row + 1)
            index2 += 1
    basic.pause(1000)
    index3 = 0
    while index3 <= num - 1:
        led.unplot(index3, row)
        index3 += 1
    if num > 5:
        index4 = 0
        while index4 <= num - 6:
            led.unplot(index4, row + 1)
            index4 += 1
clapCount = 0
clapCount = 0