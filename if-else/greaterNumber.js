'use strict';

function isGreather (input){
    let a = Number(input.shift());
    let b = Number(input.shift());

    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
isGreather([40, 41])