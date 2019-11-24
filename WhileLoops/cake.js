'use strict';

function cake(input) {
    let width = +(input.shift());
    let length = +(input.shift());
    let piece = 0
    let fullCake = width * length




    while (piece != 'STOP' && fullCake >= 0) {
        piece = input.shift();
        if (piece != "STOP") {
            fullCake -= piece;
        }
    }
    if (fullCake >= 0) {
        console.log(`${fullCake} pieces are left.`)


    } else {
        console.log(`No more cake left! You need ${Math.abs(fullCake)} pieces more.`)
    }
    





}
cake([10,
    10,
    20,
    20,
    20,
    20,
    21,])