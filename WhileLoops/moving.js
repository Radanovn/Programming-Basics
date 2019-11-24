'use strict';
function moving(input) {


    let width = +(input.shift())
    let length = +(input.shift())
    let height = +(input.shift())

    let space = width * length * height
    let boxes = 0
    let command = input.shift();


    while (command != 'Done') {

        let box = +command
        boxes += box

        if (space < boxes) {
            console.log(`No more free space! You need ${boxes - space} Cubic meters more.`)
            break;
        }

        
        command = input.shift();
    
    }
    if(command == 'Done'){
    console.log(`${space - boxes} Cubic meters left.`)
    }
}