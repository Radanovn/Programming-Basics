'use strict';

function bonusPoints (input) {
    let score = Number(input.shift());
    let bonus = 0;
   

    if(score <= 100){
        bonus = 5;
        
    }
    else if(score > 1000){
        bonus = (score * 0.1);
    }
    else if(score > 100){
        bonus = (score * 0.2);
    }
    
    if(score % 2 === 0){
        bonus += 1;
    }

    else if(score % 10 === 5){
        bonus += 2;
    }

    
   
    console.log(bonus);
    console.log(score + bonus);
    

}
bonusPoints([20]);
bonusPoints([175]);
bonusPoints([2703]);
bonusPoints([15875]);