'use strict';


function fruitShop(input) {
    let fruit = (input.shift()).toLowerCase();
    let dayOfWeek = (input.shift()).toLowerCase();
    let quantity = Number(input.shift());

    let price = 0;

    if (dayOfWeek == 'monday' || dayOfWeek == 'tuesday' || dayOfWeek == 'wednesday' || dayOfWeek == 'thursday' || dayOfWeek == 'friday') {
        if (fruit == 'banana') {
            price = quantity * 2.50;
        }
        else if (fruit == 'apple') {
            price = 1.20;
        }
        else if (fruit == 'orange') {
            price = 0.85;
        }
        else if (fruit == 'grapefruit') {
            price = 1.45;
        }
        else if (fruit == 'kiwi') {
            price = 2.70;
        }
        else if (fruit == 'pineapple') {
            price = 5.50;
        }
        else if (fruit == 'grapes') {
            price = 3.85;
        }
    

    }
    else if (dayOfWeek == 'saturday' || dayOfWeek == 'sunday') {
        if (fruit == 'banana') {
            price = 2.70;
        }
        else if (fruit == 'apple') {
            price = 1.25;
        }
        else if (fruit == 'orange') {
            price = 0.90;
        }
        else if (fruit == 'grapefruit') {
            price = 1.60;
        }
        else if (fruit == 'kiwi') {
            price = 3.00;
        }
        else if (fruit == 'pineapple') {
            price = 5.60;
        }
        else if (fruit == 'grapes') {
            price = 4.20;
        }
    }
    
    if (price > 0) {
        console.log(`${(price * quantity).toFixed(2)}`)
    }
    else {
        console.log('error');
    }
    
}
fruitShop(['apple', 'Tuesday', '2']);
fruitShop(['orange',
    'Sunday',
    '3']);
fruitShop(['kiwi',
    'Monday',
    '2.5']);
    fruitShop(['grapes', 'Saturday', '0.5']);
    fruitShop(['tomato', 'Monday', '0,5']);