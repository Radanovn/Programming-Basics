'use stcict';

function divide(input) {
 
    let n = Number (input[0]);
     
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
     
    for(let i = 1; i <= n ; i++) {
        let num = Number (input[i]);
       
        if (num % 2 == 0) {
            p1++;
        }if (num % 3 ==0) {
            p2++;
        }if (num % 4 ==0) {
            p3++;
       
     
        }
       
    }
    let p1print = (p1 / n) * 100
    let p2print = (p2 / n) * 100
    let p3print = (p3 / n) * 100
    console.log(`${p1print.toFixed(2)}%` ) ;
    console.log(`${p2print.toFixed(2)}%` ) ;
    console.log(`${p3print.toFixed(2)}%` ) ;
    }