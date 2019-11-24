'use strict';

function number100to200 (input){
    let num = Number(input.shift());


if (num < 100){
    console.log("Less than 100");
}
else if(num <= 200){
        console.log("Between 100 and 200");

    }
    else {
    console.log("Greater than 200");
    }

 }
number100to200(["32"])
number100to200(["200"])
number100to200(["150"])
number100to200(["90"])
number100to200(["230"])

