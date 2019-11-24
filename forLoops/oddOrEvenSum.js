'use strict';

function oddOrEvenSum(input) {
    let n = +(input[0]);

    let odd = 0;
    let even = 0;
    
    for (let i = 1; i <= n; i++) {
        let num = +(input[i]);

        if (i % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }
    }
    
    let diff = Math.abs(odd - even)
    if(diff == 0){
        console.log("Yes");
        console.log(`Sum = ${odd}`)
    }else {
        console.log("No")
        console.log(`Diff = ${diff}`)
    }
    
}
oddOrEvenSum([4,
    10,
    50,
    60,
    20])