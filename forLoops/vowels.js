'use strict';

function vowelsSum(input) {
    let n = input[0];
    let sum = 0;
    for (let i = 0; i <= n.length; i++) {
        let letter = n[i];
         
        switch (letter) {
            case 'a': sum++; break;
            case 'e': sum += 2; break;
            case 'i': sum += 3; break;
            case 'o': sum += 4; break;
            case 'u': sum += 5; break;
            default: break;
        }



    }
    console.log(sum);
}