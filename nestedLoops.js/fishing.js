'use strict';

function fishing(input) {
    let n = +(input.shift());
    
    let name = input.shift();
    
    let income = 0;
    let spent = 0;
    let count = 0;
    while(name != 'Stop' ){
        let kg = +(input.shift());
        count++;

        let sum = 0;
        let price = 0;
        for(let i = 0; i < name.length; i++){
            let value = name.charCodeAt(i);
            sum += value;
        }

        price = sum / kg;
        if(count % 3 == 0){
            income += price;
        }else{
            spent += price;
        }
        if(count == n){
            console.log(`Lyubo fulfilled the quota!`);
            break;
        }


        name = input.shift();
    }
    let result = income - spent;

    if(result >= 0){
        console.log(`Lyubo's profit from ${count} fishes is ${result.toFixed(2)} leva.`)
    }else{
        console.log(`Lyubo lost ${Math.abs(result).toFixed(2)} leva today.`)
    }
}