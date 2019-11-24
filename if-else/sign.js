'use strict';

function sign(input) {

    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    if (a) {
        console.log(Math.sign(a));
    }
    else if (b) {
        console.log(Math.sign(b));
    }
    else {
        console.log(Math.sign(c));
    }
}
sign([23, -15, 0])dfz