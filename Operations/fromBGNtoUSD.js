'use strict';

function convertor (input) {
    let usd = Number (input.shift());
    let bgn = usd * 1.79549;
    console.log(bgn.toFixed(2));
};
convertor([20]);