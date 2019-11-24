'use strict';

function test(input){
 
    let singer = +(input.shift())
    let guest = (input.shift());
    let total = 0;
    let guestCounter= 0
 
    while(guest !== 'The restaurant is full'){
        if(+(guest) < 5){
            total+= +(guest) * 100;
            guestCounter+= +(guest);
        }else{
            total+= +(guest) * 70;
            guestCounter+= +(guest);
        }
        guest = input.shift();
    }
    if(total >= singer){
        console.log(`You have ${guestCounter} guests and ${total - singer} leva left.`)
    }else{
        console.log(`You have ${guestCounter} guests and ${total} leva income, but no singer.`)
    }
 
}