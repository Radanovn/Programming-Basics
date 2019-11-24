'use strict';

function oddOrEven(input) {
    let n = +(input[0]);

    let EvenSum = 0;
    let OddSum = 0;

    let EvenMin = 1000000000;
    let EvenMax = -1000000000;
    let OddMin = 1000000000;
    let OddMax = -1000000000;

    for (let i = 1; i <= n; i++) {

        let num = +(input[i]);

        if (i % 2 == 0) {
            EvenSum += num
            if (num > EvenMax) {
                num = EvenMax
            } else if (num < EvenMin)
                num = EvenMin
        } else {
            OddSum += num
            if (num > OddMax) {
                num = OddMax

            } else if (num < OddMin) {
                num = OddMin
            }
        }


    }
    console.log(`OddSum = ${OddSum.toFixed(2)}`);
    if (oddMin == 1000000000) {
        console.log(`OddMin=No,`)
    } else {
        console.log(`OddMin= ${OddMin.toFixed(2)},`);
    }
    if (oddMax == -1000000000) {
        console.log(`OddMax=No,`)
    } else {
        console.log(`OddMax=${OddMax.toFixed(2)},`);
    }


console.log(`EvenSum=${EvenSum.toFixed(2)},`);
if (EvenMin == 1000000000) {
    console.log(`EvenMin=No,`)
} else {
    console.log(`EvenMin= ${EvenMin.toFixed(2)},`);
}
if (EvenMax == -1000000000) {
    console.log(`EvenMax=No,`)
} else {
    console.log(`EvenMax=${EvenMax.toFixed(2)},`);
}

}


oddOrEven([6,
    2,
    3,
    5,
    4,
    2,
    1])