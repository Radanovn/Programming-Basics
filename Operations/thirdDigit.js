'use strict';

function thirdDigit(input) {
    let N = input.shift();
   let eb =  (input % 10000 / 100)
    console.log(input.toString().slice(-4, -2) + ' ' + eb )
if (input == true) {
    console.log("false THIRD_DIGIT" , );
}

thirdDigit([1234]);