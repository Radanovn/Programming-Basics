'use strict';

function seconds (input){

    let first = Number(input.shift());
    let second = Number(input.shift());
    let third = Number(input.shift());
    

    let totalSeconds = first + second + third;
    
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;

    if (secs < 10){
        console.log(`${mins}:0${secs}`);
    }
    else {
        console.log(`${mins}:${secs}`);
    }



}
seconds([35, 45, 44]);