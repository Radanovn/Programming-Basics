'use strict';


function timeAfter15(input) {
    let hours = Number(input.shift());
    let mins = Number(input.shift());

    let totalMins = hours * 60 + mins + 15;
    let finalHours = Math.floor(totalMins / 60);
    let finalMins = totalMins % 60;
    
if(finalHours === 24){
    finalHours -= 24;
}

if (finalMins < 10){
    console.log(`${finalHours}:0${finalMins}`)
}
else{
    console.log(`${finalHours}:${finalMins}`)
}

}
timeAfter15([12, 49]);