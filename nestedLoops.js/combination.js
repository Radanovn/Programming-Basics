'use strict';

function building(inputArr) {
    let floorCount = +(inputArr[0]);
    let roomCount = +(inputArr[1]);
    let output = "";
    for (let floor = floorCount; floor > 0; floor--) {

        output = "";
        for (let room = 0; room < roomCount; room++) {
            if(floor == floorCount){
                output += `L${floor}${room} `
                continue;
            }
            if (floor % 2 == 0) {
                output += `O${floor}${room} `;
            } else {
                output += (`A${floor}${room} `);
            }
        }
        console.log(output);
    
    }
}
building([6, 4])
