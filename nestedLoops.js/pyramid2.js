'use strict';

function pyramid(input) {
    let n = +(input[0]);

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= n; rows++) {
        for (let cows = 1; cows <= rows; cows++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }

    }
}
pyramid([7])