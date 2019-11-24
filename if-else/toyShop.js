'use strict';

function toyShop(input) {
    let excursionPrice = Number(input.shift());
    let puzzle = Number(input.shift());
    let talkingDoll = Number(input.shift());
    let teddyBear = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());
    let sum = (puzzle * 2.6 + talkingDoll * 3 + teddyBear * 4.10 + minions * 8.20 + trucks * 2);
    let sumToy = (puzzle + talkingDoll + teddyBear + minions + trucks);
    let discount = 0;
    if (sum >= 50) {
        discount = sum * 0.25
    }
    let totalPrice = sum - discount;
    totalPrice = totalPrice -(totalPrice * 0.10);
    if (excursionPrice <= totalPrice){
        let result = (totalPrice - excursionPrice);
        console.log(`Yes! ${(result.toFixed(2))} lv left.`);
    }
    else{
        let result = Math.abs(excursionPrice - totalPrice);
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`);
    }
    
}
toyShop([40.8,
    20,
    25,
    30,
    50,
    10])