'use strict';


function multipy(input) {





    let n = +(input.shift());

    let singleDigit = 0;
    let doubleDigit = 0;
    let tripleDigit = 0;

    singleDigit = n % 10;
    doubleDigit = (n / 10) % 10;
    tripleDigit = n / 100;

    for (let single = 1; single <= singleDigit; single++) {
        for (let double = 1; double <= doubleDigit; double++) {
            for (let triple = 1; triple <= tripleDigit; triple++) {
                console.log(`${single} * ${double} * ${triple} = ${single * double * triple};`);

            }
        }
    }
}
multipy([324])