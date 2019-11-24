'use strict';

function fruitOrVegetable(input) {
    let product = input.shift();

    if (product === 'banana' || product === 'apple' || product === 'kiwi' || product === 'lemon' || product === 'cherry' || product === 'grapes') {
        console.log('fruit');
    }
    else if (product === 'tomato' || product === 'cucumber' || product === 'pepper' || product === 'carrot'){
        console.log('vegetable');
    }
    else {
        console.log('unknown');
    }

}
fruitOrVegetable([banana])