'use strict'

function matrix(input) {
    let a = +(input[0]);
    let b = +(input[1]);
    let c = +(input[2]);
    let d = +(input[3]);

    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            for (let k = c; k <= d; k++) {
                for (let l = c; l <= d; l++) {
                    if((i + l == j + k) && (i != j && k!= l)){
                        console.log(`${i}${j}`);
                        console.log(`${k}${l}`);
                        console.log();
                    }
                }
            }

        }
    }
}
matrix([1,2,3,4])