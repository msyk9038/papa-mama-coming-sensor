bluetooth.startUartService()
let 感知回数 = 0
basic.showNumber(5)
basic.pause(200)
basic.showNumber(4)
basic.pause(200)
basic.showNumber(3)
basic.pause(200)
basic.showNumber(2)
basic.pause(200)
basic.showNumber(1)
basic.pause(200)
basic.showNumber(感知回数)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        bluetooth.uartWriteNumber(0)
        for (let index = 0; index < 25; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(100)
        }
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        感知回数 += 1
        for (let index = 0; index < 3; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(100)
        }
        basic.showNumber(感知回数)
        basic.pause(5000)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
})
