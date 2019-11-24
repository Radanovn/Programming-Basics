'use strict';

function newHouse(input) {
    let flowers = input.shift();
    let flowersCount = Number(input.shift());
    let budget = Number(input.shift());

    let price = 0;
    let chek = false;

    switch (flowers)
    {
        case "Roses":
            chek = true
            price = flowersCount * 5;
            if ( flowersCount > 80){
                price *= 0.90;
            }
            break;
        case "Dahlias":
            chek = true
            price = flowersCount * 3.80;
            if (flowersCount > 90){
                price *= 0.85;
            }
            break;
        case "Tulips":
            chek = true
            price = flowersCount * 2.80;
            if (flowersCount > 80){
                price *= 0.85;
            }

            break;
        case "Narcissus":
        chek = true    
        price = flowersCount * 3;
        if(flowersCount < 120){
            chek *= 1.15
        }
            break;
        case "Gladiolus":
            chek = true
            price = flowersCount * 2.50;
            if(flowersCount < 80){
                price *= 1.20
            }
            break;
    }


  if(chek) {     
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price-budget).toFixed(2)} leva more.`)
    }
}
}

newHouse(['Roses', '55', '250'])
newHouse(['Tulips', '88', '260']);
newHouse(['Narcissus', '119', '360'])