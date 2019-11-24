'use strict';

function vacantion(input) {
    let moneyForVacantion = +(input.shift());
    let budget = +(input.shift());

    let spendCount = 0;
    let daysCount = 0;

    let isSpendIs5 = false;
    while (budget < moneyForVacantion) {
        let operation = input.shift();
        let money = +(input.shift());
        daysCount++;
        
        if (operation === 'spend') {

            budget -= money;
            if (budget < 0) {
                budget = 0;
            }
            spendCount++
            if (spendCount === 5) {
                isSpendIs5 = true;
                break;
            }

        } else if (operation === 'save') {
            isSpendIsl5 = false;
            budget += money
            spendCount = 0;
        }
    }


    if (isSpendIs5) {
        console.log(`You can't save the money.\n${daysCount}`)

    } else {
        console.log(`You saved the money for ${daysCount} days.`)
    }



}

vacantion([]);