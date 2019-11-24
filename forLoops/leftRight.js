'use strict';
function leftRight(input) {



    let n = +(input[0])
    
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 1; i <= n; i++) {
       let num = Number(input[i]);
        leftSum += num;
    }

    for (let j = n + 1; j <= n * 2; j++) {
        let num = Number(input[j]);
        rightSum+=num;
        
    }
        let diff = (Math.abs(leftSum - rightSum))
        if (diff == 0) {
            console.log(`Yes, sum = ${leftSum}`)
        } else {
            console.log(`No, diff = ${diff}`);
        }
    

}
leftRight([2,
    10,
    90,
    60,
    40])