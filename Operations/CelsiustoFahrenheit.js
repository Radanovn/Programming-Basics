'use strict';

function CelsiustoFahrenheit(input){
    let Celsius = Number(input.shift());
    let Fahrenheit = Celsius * 33.8;
    console.log(Fahrenheit.toFixed(2));

} 
CelsiustoFahrenheit([23]);