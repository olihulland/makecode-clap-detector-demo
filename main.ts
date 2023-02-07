claps.onWakeSequenceDetected(function () {
    led.plot(0, 4)
})
claps.onClapInstance(function () {
    clapCount += 1
    if (SERIAL_ENABLED) {
        serial.writeLine("clap instance! (" + ("" + clapCount) + ")")
    }
    led.plot(4, 4)
    basic.pause(100)
    led.unplot(4, 4)
})
claps.onOnelap(function () {
    displayNum(1, 0, "single clap")
})
claps.onCaptureOver(function () {
    led.unplot(0, 4)
})
claps.onTripleClapsCapture(function (count) {
    displayNum(count, 2, "triple clap followed by " + count)
})
claps.onXClapsCapture(5, function (count) {
    displayNum(count, 2, "5 claps followed by " + count)
})
claps.onTripleClap(function () {
    displayNum(3, 0, "triple clap")
})
claps.onXClap(4, function () {
    displayNum(4, 0, "quadruple clap")
})
claps.onDoubleClap(function () {
    displayNum(2, 0, "double clap")
})
// flashes on leds on a row to show a number. will overflow onto row beneath
function displayNum (num: number, row: number, serialStr: string) {
    if (SERIAL_ENABLED) {
        serial.writeLine(serialStr)
    }
    for (let index = 0; index <= num - 1; index++) {
        led.plot(index, row)
    }
    if (num > 5) {
        for (let index2 = 0; index2 <= num - 6; index2++) {
            led.plot(index2, row + 1)
        }
    }
    basic.pause(1000)
    for (let index3 = 0; index3 <= num - 1; index3++) {
        led.unplot(index3, row)
    }
    if (num > 5) {
        for (let index4 = 0; index4 <= num - 6; index4++) {
            led.unplot(index4, row + 1)
        }
    }
}
let SERIAL_ENABLED = false
let clapCount = 0
clapCount = 0
SERIAL_ENABLED = false
