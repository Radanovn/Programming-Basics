'use strict';

function pyramid(input) {
    let totalNumberOfRows = +(input[0]);
    
    let current = 1;
    let isBigger = false;
    let output = '';


    for(let i = 1; i <=totalNumberOfRows; i++){
        for(let j = 1; j <= i; j++){
            if(current > totalNumberOfRows){
                isBigger = true;
                break;
            }
            output += current + " ";
            current++;

        }
        console.log(output);
        output = "";
        if(isBigger){
            break;
        }
    }
}
pyramid([7])


