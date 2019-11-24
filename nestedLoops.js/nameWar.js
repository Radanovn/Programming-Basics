'use strict';

function nameWar(input) {
    
    let name = input.shift();
    let winnerName = "";
    let score  = Number.MIN_SAFE_INTEGER;
    while(name != "STOP"){
        let tempScore = 0;
        for(let i = 0; i < name.length; i++){
            tempScore += name.charCodeAt(i);
        }
        console.log(tempScore);
        if(tempScore >= score){
            score = tempScore;
            winnerName = name;
        }
        name = input.shift();
    }
    console.log(`Winner is ${winnerName} - ${score}`)
}