'use strict';

function spaceship(input) {
    let width = +(input[0]);
    let length = +(input[1]);
    let height = +(input[2]);
    let middleHeight = +(input[3]);

    let rocketVolume = width * length * height;
    let roomVolume = (middleHeight + 0.40) * 2 * 2;
    let willHaveAspaceFor =  Math.floor(rocketVolume / roomVolume); 

    if(willHaveAspaceFor >= 3 && willHaveAspaceFor <= 10 ){
        console.log(`The spacecraft holds ${willHaveAspaceFor} astronauts.`);

    }else if(willHaveAspaceFor < 3){
        console.log("The spacecraft is too small.");
    }else{
        console.log("The spacecraft is too big.");
    }

}
spaceship([3.5, 4, 5, 1.70]);