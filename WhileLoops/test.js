'use strict';

function demo(input) {
    let number = +(input.shift());
    let numberToPrint = 1;
    while(numberToPrint < number) {
        if (numberToPrint % 12 === 0){
            break;
        }
    
        console.log(numberToPrint);
        numberToPrint++
    }
    console.log('after while')
}
demo(['100']);