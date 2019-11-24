'use strict';

function swimmingRecord(input) {
    let recordInSecs = Number(input.shift())
    let distance = Number(input.shift())
    let time1mInSecs = Number(input.shift())

    let needed = distance * time1mInSecs;
    let everyFiveteenMeters = (Math.floor(distance / 15)) * 12.5;
    let sumTime = needed + everyFiveteenMeters;
    let noRecord = sumTime - recordInSecs;
    
   
    
    if (recordInSecs > sumTime) {
        console.log(`Yes, he succeeded! The new world record is ${(sumTime).toFixed(2)} seconds.`)

    }
    else {
        console.log(`No, he failed! He was ${noRecord.toFixed(2)} seconds slower.`)
    }

   

}
swimmingRecord([10464,
    1500,
    20]);

swimmingRecord([55555.67,
    3017,
    5.03])