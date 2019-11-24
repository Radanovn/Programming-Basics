'use strict'
function AnimalClass(input) {
    let word = input.shift();

    switch (word) {
        case 'dog': console.log('mammal');
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake': 
        console.log('reptile');
            break;
        default: console.log('unknown');
            break;
    }
}
AnimalClass(['dog']);
AnimalClass(['crocodile']);
AnimalClass(['snake']);

AnimalClass(['tortoise']);
AnimalClass(['tortoisee']);