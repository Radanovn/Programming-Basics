'use strict';

function coding(input) {
    let n = input[0];
    for(let i = n.length - 1; i >= 0; i--){
        let currentDigitToNum = +(n[i]);
        if(currentDigitToNum == 0){
            console.log("ZERO");
            continue;
        }
        let output = "";

        for (let j = 1; j <= currentDigitToNum; j++){
            output += String.fromCharCode(currentDigitToNum + 33);
        }

        console.log(output);

    }
    
}
coding([2049])