'use strict';

function oldBook(input) {
    let book = input.shift();
    let capacitet = +(input.shift());
    
    let counter = 0;
    let bookIsFound = false; 
    
    let nextBookName = input.shift();
    
    while (counter < capacitet || book == 'Troy'){
        
    if(nextBookName == book){
        bookIsFound = true;
        break;
    }
    counter++
    nextBookName = input.shift();
    
    }
    
    if(bookIsFound == false){
        
        console.log(`The book you search is not here!\nYou checked ${capacitet} books.`)
    } else{
        console.log(`You checked ${counter} books and found it.`)

    }
}


// oldBook(['Troy',
//     'Stronger',
//     'Life Style',
//      8,
//    'Troy',])
oldBook (['The Spot',
    '4',
    'Hunger Games',
    'Harry Potter',
    'Torronto',
    'Spotify'])