'use strict';
function equalSumsEvenOdd(input) {
    let firstNum = +(input.shift());
    let secondNum = +(input.shift());

    let output = "";

    for(let i = firstNum; i<= secondNum; i++){
        let current = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < current.length; j++){
            let currentDigit = current.charCodeAt(j);
            if(j % 2 == 0){
                evenSum += currentDigit;
            }else{
                oddSum += currentDigit;
            }
        
        }
        if(oddSum == evenSum){
            output += i + " ";

        }
    }
console.log(output);

}