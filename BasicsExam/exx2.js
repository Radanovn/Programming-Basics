'use strict';

function shoping(input) {
    let budget = +(input[0]);
    let chokoCount = +(input[1]);
    let milk = +(input[2]);

    let chokos = chokoCount * 0.65;
    let moneyForMilk = milk * 2.70;
    let mandarins = Math.floor(chokoCount - (chokoCount * 0.35));
    let mandarinsCount = (mandarins * 0.20);
    let sum = chokos + moneyForMilk + mandarinsCount
    let final = (budget - sum).toFixed(2);
    if(sum <= budget){
        console.log(`You got this, ${final} money left!`)
    }else{
        console.log(`Not enough money, you need ${Math.abs(final)} more!`)
    }

}
shoping([10,
    5,
    1.5
    ])
    
shoping([3,
    4,
    2.7])