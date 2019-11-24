'use strict';
function cinema(input) {
    

    let project = input.shift();
    let rows = Number(input.shift());
    let comumns = Number(input.shift());

    
    let totalIncome = 0;
    if (project == "Premiere"){
        totalIncome = rows * comumns * 12
    }
    else if (project == "Normal"){
        totalIncome = rows * comumns * 7.5
    }
    else if (project == 'Discount'){
        totalIncome = rows * comumns * 5
    }
        console.log(`${totalIncome.toFixed(2)} leva`);

}