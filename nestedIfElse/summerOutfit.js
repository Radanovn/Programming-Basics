'use strict';

function summerOutfit(input) {
    let temperature = Number(input.shift());
    let day = input.shift();

    let outfit ;
    let shoes ;
    if (day == 'Morning') {
        if (temperature >= 10 && temperature <= 18) {
            outfit = 'Sweatshirt'
            shoes = 'Sneakers'
        }
        else if (temperature > 18 && temperature <= 24) {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }
        else if (temperature >= 25) {
            outfit = 'T-Shirt'
            shoes = "Sandals"
        }
        console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
    }

    if (day == 'Afternoon') {
        if (temperature >= 10 && temperature <= 18) {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }
        else if (temperature > 18 && temperature <= 24) {
            outfit ='T-Shirt'
             shoes = 'Sandals'
        }
        else if (temperature >= 25) {
            outfit = 'Swim Suit'
             shoes ="Barefoot"
        }
        console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
    }

    if (day == 'Evening') {
        if (temperature >= 10 && temperature <= 18) {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }
        else if (temperature > 18 && temperature <= 24) {
            outfit = 'Shirt'
             shoes = 'Moccasins'
        }
        else if (temperature >= 25) {
            outfit = 'Shirt'
            shoes = "Moccasins"
        }
        console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
    
    }




}
summerOutfit([16, 'Morning'])
summerOutfit([22, 'Afternoon'])