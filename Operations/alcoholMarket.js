'use strict';
function alcohol (input){
    let whiskeyPrice = Number(input.shift());
    let beer = Number(input.shift());
    let wine = Number(input.shift());
    let rakija = Number(input.shift());
    let whiskey = Number(input.shift());
    

    let rakijaPrice = 0.5 * whiskeyPrice
    let winePrice = rakijaPrice - (0.4 * rakijaPrice);
    let beerPrice = rakijaPrice - (0.8 * rakijaPrice);  
    
    let sumRakija =  rakija * rakijaPrice;
    let sumWine = wine * winePrice;
    let sumBeer =  beer * beerPrice;
    let sumWhiskey =  whiskey * whiskeyPrice;
    
    let sumOfAllProducts = (sumBeer + sumRakija + sumWhiskey + sumWine);
    console.log(sumOfAllProducts.toFixed(2));
}
alcohol([50, 10 ,3.5 , 6.5, 1]);
