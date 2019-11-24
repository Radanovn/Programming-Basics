'use strict';
function Choreography (input){
    let steps = Number(input.shift());
    let dancers = Number(input.shift());
    let days  = Number(input.shift());

    let stepsPerDay = Math.ceil((steps / days) / steps * 100);
    let stepsPerDancer = (stepsPerDay / dancers);

    if (stepsPerDay <= 13){
        console.log(`Yes, they will succeed in that goal! ${stepsPerDancer.toFixed(2)}%.`);
      
      }  else{
      console.log(`No, they will not succeed in that goal! Required ${stepsPerDancer.toFixed(2)}% steps to be learned per day.`);
    
    }

}
//Choreography([10464, 20, 20]);
Choreography([55555, 30, 7]);