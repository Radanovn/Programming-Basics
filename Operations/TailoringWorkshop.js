'use strict';

function tailoringWorkshop (input) {
    let tables = Number(input.shift());
    let tablesLength = Number(input.shift());
    let tablesWidth = Number(input.shift());

    let conversArea = tables * (tablesLength + 2 * 0.30) * (tablesWidth + 2 * 0.30)
    let squareArea = tables * (tablesLength /2) * (tablesWidth / 2);

    let priceInDollars = conversArea * 7 + squareArea * 9
    let priceInLeva = priceInDollars * 1.85

    console.log(`${priceInDollars.toFixed(2)} USD`);
    console.log(`${priceInLeva.toFixed(2)} BGN`);




}