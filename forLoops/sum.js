'use strict';
function sum(input) {
    

let sum = 0
let NumsCounter = +(input.shift());

for (let i = 0; i < NumsCounter; i++) {
    let userNumber = +(input.shift());

    sum += userNumber;
    
}
console.log(sum);
}
