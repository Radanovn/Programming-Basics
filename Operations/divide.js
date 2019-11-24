'use strict';

function Divide (input){
    let divider = Number(input.shift());
    if (divider % 2 == 1){
        console.log("TRUE" , divider)
        }
        else {
            console.log("FALSE" , divider)
        }
}
Divide ([70]);