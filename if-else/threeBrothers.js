'use strict';
function brothers (input){
let firstBrother = Number(input.shift());
let secondBrother = Number(input.shift());
let thirdBrother = Number(input.shift());
let fatherTime = Number(input.shift());

let totalTime = 1 / (1/ firstBrother + 1 / secondBrother + 1 / thirdBrother);
totalTime *= 1.15;

console.log(`Cleaning time: ${totalTime.toFixed(2)}`);
let timeleft = fatherTime - totalTime;

if (timeleft >= 0 ){
    let result = Math.floor(timeleft);
    console.log(`Yes, there is a surprise - time left -> ${result} hours.`);
}
else{
    let result = Math.ceil(Math.abs(timeleft));
    console.log(`No, there isn't a surprise - shortage of time -> ${result} hours.`);
}
}
brothers ([3.2, 2.5, 1.24, 0.5]);