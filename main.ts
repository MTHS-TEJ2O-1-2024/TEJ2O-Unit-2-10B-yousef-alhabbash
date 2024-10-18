/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Yousef
 * Created on: Oct 2024
 * This program defines light level
*/
//setup
let neopixelStrip: neopixel.Strip = null
let strip = neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let lightlevel = input.lightLevel();
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
lightlevel = input.lightLevel()

basic.showIcon(IconNames.Happy)

//start
input.onButtonPressed(Button.A, function () {
    lightlevel = input.lightLevel()
    basic.pause(1000)

    if (lightlevel <= 51) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
    }

    if (lightlevel > 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
    }

    if (lightlevel > 108) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()

    }


    if (lightlevel > 156) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()

    }

    if (lightlevel > 208) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.show()
    }

    basic.showIcon(IconNames.Happy)
    
})

//reset
input.onButtonPressed(Button.B, function () {

    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()

})