'use strict';

function twoKplus1(input) {
    let numCounter = 0;
    let number = +(input.shift());
    let currentSeqNum = 1
    while (currentSeqNum <= number ){
        console.log(currentSeqNum);
        currentSeqNum = (currentSeqNum * 2) + 1
    }

    
}