'use strict';

function exchangeIfGreather (input) {

    let a = Number(input.shift());
    let b = Number(input.shift());

    if (a > b) {
        console.log(b, a);
    }
    else {
        console.log(a, b);
    }


}
exchangeIfGreather([2, 5]);
exchangeIfGreather([23, 5]);