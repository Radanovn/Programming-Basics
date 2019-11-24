'use strict';


function equalPairs(input) {
    let n = +(input.shift())
    let maxDiff = 0;
    let lastPair = 0;
    for (let i = 0; i < n; i++){
        let num1 = +(input.shift());
        let num2 = +(input.shift());
     
        let currPair = num1+num2;

        if(i > 0){
            let diff = Math.abs(currPair - lastPair);
            if(diff > maxDiff){
                maxDiff = diff;
            }
        }

         lastPair = currPair;
        
    }
    if(maxDiff === 0){
        console.log(`Yes, value=${lastPair}`);
    }else{
        console.log(`No, maxdiff=${maxDiff}`);
    }
}