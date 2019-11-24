'use strict'

function NumberRange(input){
let number = +(input.shift());

while(number < 1 || number > 100) {
    console.log('Invalid Number!')
    number = +(input.shift());


}
console.log(`The number is: ${number}`);
}
NumberRange (['-70', '101' , '-35', '10000000000', '3'])