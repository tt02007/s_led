for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        if (y % 2 == 0) {
            led.plot(x - 0, y)
        } else {
            led.plot(4 - x, y)
        }
        basic.pause(100)
    }
}
