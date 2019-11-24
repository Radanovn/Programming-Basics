'use strict';

function numberSequence(input) {
    let minNumber = Number.MAX_SAFE_INTEGER;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let userInput = input.shift();


    while (userInput !== 'END'){
        let number = +(userInput);

        if (minNumber < number){
            minNumber = number
        }
        if (maxNumber > number){
            maxNumber = number
        }
        userInput = input.shift();
    }
    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
    
}