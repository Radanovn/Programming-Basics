'use strict';

function rectangle (input){
    let width = input.shift();
    let length = input.shift();
    let area = width * length
    let parameter = Math.sqrt(width + length);
    console.log(`${area.toFixed(2)}` , `${parameter.toFixed(2)}`)
}
rectangle([432, 632,3]);