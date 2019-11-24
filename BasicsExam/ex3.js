'use strict';

function sushi(input) {

    let sushi = input.shift();
    let restaurantName = input.shift();
    let portionCounter = +(input.shift());
    let order = input.shift();
    let price = 0;
    
    let check = true;


    if (restaurantName == "Sushi Zone") {
        switch (sushi) {
            case "sashimi": price = portionCounter = portionCounter * 4.99; break;
            case "maki": price = portionCounter * 5.29; break;
            case "urumaki": price = portionCounter * 5.99; break;
            case "temaki": price = portionCounter * 4.29; break;
            default:  break;
            
        }
    }
   else if (restaurantName == "Sushi Time") {
        switch (sushi) {
            case "sashimi": price = portionCounter * 5.49; break;
            case "maki": price = portionCounter * 4.69; break;
            case "urumaki": price = portionCounter * 4.49; break;
            case "temaki": price = portionCounter * 5.19; break;
            default:  break;
        }
    } else if (restaurantName == "Sushi Bar") {
        switch (sushi) {
            case "sashimi": price = portionCounter * 5.25; break;
            case "maki": price = portionCounter * 5.55; break;
            case "urumaki": price = portionCounter * 6.25; break;
            case "temaki": price = portionCounter * 4.75; break;
            default:  break;
        }
    } else if (restaurantName == "Asian Pub") {
        switch (sushi) {
            case "sashimi": price = portionCounter * 4.50; break;
            case "maki": price = portionCounter * 4.80; break;
            case "urumaki": price = portionCounter * 5.50; break;
            case "temaki": price = portionCounter * 5.50; break;
            default: 
                 break;
        }
    }else{
        console.log(`${restaurantName} is invalid restaurant!`)
        check == false; return;
    }
    let delivery = price * 0.20;
    if(order == "Y" && check == true){
        console.log(`Total price: ${Math.ceil(price + delivery)} lv.`);
    }else if (order == "N" && check){
        console.log(`Total price: ${Math.ceil(price)} lv.`)
    }
}


sushi(["maki", "dsada", 4, "Y"]);