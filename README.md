# pxt-seeed-temperatursensor


 Paket für den Temperatursensor V1.2 von Seeed
 
 basierend auf dem Projekt von Tino Hempel
 
 https://www.hackster.io/ToniTaste/calliope-mini-und-grove-temperatur-sensor-v1-2-955ab7
 
 CC BY V4.0 https://creativecommons.org/licenses/by/4.0/

 Danke Tino!

 Liest die Temperatur vom Grove-Sensor aus.
 Aber nur im Bereich von 5⁰C bis 42⁰C

 Der Wert -1 gibt an, dass die Temperatur außerhalb des Wertebereiches liegt!

![](https://github.com/MKleinSB/pxt-Seeed-Temperatursensor/blob/master/P1.png) 

## Temperatur()
Diese Funktion gibt die aktuelle Temperatur als Zahl zurück.

## SchreibeTemperatur()
Diese Funktion schreibt die aktuelle Temperatur auf das Diplay des Calliope Mini / micro:bit bzw. gibt eine Fehlermeldung
aus, wenn der Temperaturbereich über-/unterschritten wird. Es wird automatisch ⁰C angehängt.

## Supported targets

* for PXT/calliope
* for PXT/microbit
