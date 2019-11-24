'use strict';


function areaOfFigures(input) {

   

    let result = 0
    let type = input.shift();
    if (type == "square") {
        let a = Number(input.shift());
        let area = a * a;
        result = area;
    }

    else if (type == "rectangle") {
        let a = Number(input.shift())
        let b = Number(input.shift());
        let area = a * b
        result = area;
    }
    else if (type == "circle") {
        let r = Number(input.shift())
        result = Math.PI * r * r;
    }
    else if (type == "triangle") {
        let a = Number(input.shift());
        let b = Number(input.shift());
        result = (a * b) / 2;
    }


    console.log(result.toFixed(3));



}
areaOfFigures(["square", 5])