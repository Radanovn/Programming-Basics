'use strict';

function Lilly(input) {

    let LillyAge = +(input[0]);
    let washerPrice = +(input[1]);
    let toysCount = +(input[2]);

    let moneyGift = 10;
    let moneySave = 0;
    let toysGifted = 0;
    for (let i = 1; i <= LillyAge; i++){
        if(i % 2 !== 0){
            toysGifted++;
        }else {
            moneySave += moneyGift - 1;
            moneyGift += 10; 
        }
    }
let totalToysPrice = toysGifted * toysCount;
let totalMoneySaved = moneySave + totalToysPrice;

if(totalMoneySaved >= washerPrice){
    let moneyLeft = totalMoneySaved - washerPrice;
    console.log(`Yes! ${(moneyLeft.toFixed(2))}`);
}else{
    let moneyShort = washerPrice - totalMoneySaved
    console.log(`No! ${(moneyShort.toFixed(2))}`);
}
    
}