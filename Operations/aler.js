'use strict';

function company (input){
let day = Number(input.shift());
let cooks = Number(input.shift());
let cakes = Number(input.shift());
let waffles = Number(input.shift());
let pancakes = Number(input.shift());

let cakesPrice = cakes * 45;

let wafflesPrice = waffles * 5.80;
let pancakesPrice = pancakes * 3.20;
let sumOfTheDay = (cakesPrice + wafflesPrice + pancakesPrice) * cooks;
let companyAmmount = (sumOfTheDay * day);
let result = companyAmmount * 0.875;
console.log(result.toFixed(2));



}