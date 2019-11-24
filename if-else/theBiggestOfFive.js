'use strict';

function bigger(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());
    let e = Number(input.shift());

    if (a > b && a > c && a > d && a > e)  {
        console.log(a);

    }
    else if (b > a && b > c && b > d && b > e) {
        console.log(b);
    }
    else if (c > a && c > b && c > d && c > e) {
        console.log(c);
    }
    else if (d > a && d > b && d > c && d > e){
        console.log(d);
    }
    else if (e > a && e > b && e > c && e > d){
        console.log(e);
    }
}

bigger([32,12,31, 11, 2]);
bigger([32,54,31, 13, 4]);
bigger([32,12,312, 15, 432]);
bigger([32,12,312, 323, 32]);
bigger([32,12,312, 32, 522]);
