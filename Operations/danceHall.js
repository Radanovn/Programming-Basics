'use strict';

function danceHall (input){

    let hallLength = Number(input.shift());
    let hallWidth = Number(input.shift());
    let wardrobeSide = Number(input.shift());
   
    
    let hallArea = (hallLength *100) * (hallWidth * 100);
    let benchArea = (hallArea / 10);
    let wardrobeArea = (wardrobeSide * 100) * (wardrobeSide * 100);

    let freeArea = hallArea - benchArea - wardrobeArea;
    let dancersCount = (Math.floor(freeArea / (40 + 7000)));
    console.log(dancersCount);
}
danceHall([50, 25, 2]);