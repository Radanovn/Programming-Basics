'use strict';

function area (input){
   


    
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let length = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);

    let s = length * width ;
    let p = 2*(length + width);
    
    console.log(s.toFixed(2));
    console.log(p.toFixed(2));

}
