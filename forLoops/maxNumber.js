'use strict';

function max(input) {
    let n = Number(input[0]);
    let maxNumber = Number.MIN_SAFE_INTEGER
    
    

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);



        if (num > maxNumber) {
            maxNumber = num;

        }
    }

    console.log(maxNumber)
}
max([2,
    100,
    99])
    max([3,
        -10,
        20,
        -30])
        max([4,
            45,
            -20,
            7,
            99])