'use strict';

function week (input){
    let day = Number(input.shift());
switch(day){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default: console.log("Error");

}

}
week([1]);
week([2]);
week([3]);
week([4]);
week([5]);
week([6]);
week([7]);
week([12]);
week([25]);
