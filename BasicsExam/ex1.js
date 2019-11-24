'use strict';

function ski (input) {
    let foodMoney = +(input.shift());
    let souvenirs = +(input.shift());
    let hotelMoney = +(input.shift());

    let road = 420;

    let neededFuel = (road / 100) * 7;
    let moneyForFuel = neededFuel * 1.85;

    let foodAndSouvenirs = 3 * foodMoney + 3 * souvenirs;

    let firstDay = hotelMoney * 0.9;
    let secondDay = hotelMoney * 0.85;
    let thirdDay = hotelMoney * 0.8;

    let sum = moneyForFuel + firstDay + secondDay + foodAndSouvenirs +thirdDay;

    console.log(`Money needed: ${sum.toFixed(2)}`);
}
ski([100, 50, 500])