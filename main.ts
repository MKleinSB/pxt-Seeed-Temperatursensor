/*
* Paket für den Temperatursensor V1.2 von Seeed
* basierend auf dem Projekt von Tino Hempel
* https://www.hackster.io/ToniTaste/calliope-mini-und-grove-temperatur-sensor-v1-2-955ab7
* CC BY V4.0 https://creativecommons.org/licenses/by/4.0/
* Danke Tino!
*/

//% color=#5042f4 icon="\uf2c9"
namespace Temperatursensor {
    /**
     * Liest die Temperatur vom Grove-Sensor aus.
     * Aber nur im Bereich von 5⁰C bis 42⁰C
     * Der Wert -1 gibt an, dass die Temperatur außerhalb des Wertebereiches liegt!
     */
    //% block
    export function Temperatur(): number {
        let Temperatur = -1
        let n = 0
        n = pins.analogReadPin(AnalogPin.C16)
        if (n >= 270 && n <= 699) {
            Temperatur = pins.map(
                n,
                270,
                699,
                5,
                42
            )
        }
        return Temperatur;

    }
    /**
    * Schreibt die aktuelle Temperatur auf dem 5x5 Display
   */
    //% block
    export function SchreibeTemperatur(): void {
        let Temp = -1
        let n = 0
        n = pins.analogReadPin(AnalogPin.C16)
        if (n >= 270 && n <= 699) {
            Temp = pins.map(
                n,
                270,
                699,
                5,
                42
            )
        }
        if (Temp = -1) {
            basic.showString("Temperatur ausserhalb des Sensorbereichs!")
        } else {
            basic.showNumber(Temp)
            images.createBigImage(`
            . # . . .   # # . . .
            # . # . #   . . . . .
            . # . . #   . . . . .
            . . . . #   . . . . .
            . . . . .   # # . . .
            `).scrollImage(1, 200)
        }
    }
}