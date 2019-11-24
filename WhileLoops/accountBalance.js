'use strict';

function bankBalance(input) {
    let depositCount = +(input.shift());
    let accountAmmount = 0;
    let currentDepositCount = 0

    while (currentDepositCount < depositCount){
        let depositAmmount = +(input.shift());
        if (depositAmmount < 0){
            console.log("Invalid operation!");
            break;
        }
        currentDepositCount++
        console.log(`Increase: ${depositAmmount.toFixed(2)}`)
        accountAmmount += depositAmmount;
        depositAmmount = +(input.shift());

    }
    console.log(`Total: ${accountAmmount.toFixed(2)}`);



    
}
bankBalance(['100', '23', '0.45', '4100', '-20', '100'])