'use strict';

function equal (input){
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    if (a == b && a == c && c == b) {
        console.log("yes")
    }
        else {
            console.log("no");
        }
    
    } 

equal([3 , 3, 3])
equal([32, 13, 32])
