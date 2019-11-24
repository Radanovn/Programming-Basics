'use strict';


function shop(input) {
    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());
    let totalPrice = 0;


    if (city === 'Sofia') {
        if (product === 'coffee') {
            (totalPrice = quantity * 0.50)
            console.log(totalPrice);
        }

        else if (product === 'water') {
            (totalPrice = quantity * 0.80)
            console.log(totalPrice);
        }
        else if (product === 'beer') {
            (totalPrice = quantity * 1.20)
            console.log(totalPrice);
        }

        else if (product === 'sweets') {
            (totalPrice = quantity * 1.45)
            console.log(totalPrice);
        }
        else if (product === 'peanuts') {
            (totalPrice = quantity * 1.60)
            console.log(totalPrice);
        }
    }


    else if (city === 'Plovdiv') {
        if (product === 'coffee') {
            (totalPrice = quantity * 0.40)
            console.log(totalPrice);

        }
        else if (product === 'water') {
            (totalPrice = quantity * 0.70)
            console.log(totalPrice);
        }
        else if (product === 'beer') {
            (totalPrice = quantity * 1.15)
            console.log(totalPrice);
        }
        else if (product === 'sweets') {
            (totalPrice = quantity * 1.30)
            console.log(totalPrice);
        }
        else if (product === 'peanuts') {
            (totalPrice = quantity * 1.50)
            console.log(totalPrice);
        }
    }
    else if (city === 'Varna') {
        if (product === 'coffee') {
            (totalPrice = quantity * 0.45)
            console.log(totalPrice);
        }


        else if (product === 'water') {
            (totalPrice = quantity * 0.70)
            console.log(totalPrice);
        }
        else if (product === 'beer') {
            (totalPrice = quantity * 1.10)
            console.log(totalPrice);
        }
        else if (product === 'sweets') {
            (totalPrice = quantity * 1.35)
            console.log(totalPrice);
        }
        else if (product === 'peanuts') {
            (totalPrice = quantity * 1.55)
            console.log(totalPrice);
        }
    }
}
shop(['coffee', 'Varna', '2']);
shop(['peanuts', ' Plovdiv', '1.5']);
shop(['water', ' Sofia', '6']);