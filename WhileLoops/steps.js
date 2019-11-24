'use strict';

function steps(input) {
    let steps = 0
    




    while (steps < 10000) {
        let command = input.shift();

        if (command == "Going home") {
            steps += +(input.shift());

            if (steps >= 10000) {
                console.log(`Goal reached! Good job!`);
            } else {
                let diff = 10000 - steps;
                console.log(`${diff} more steps to reach goal.`)
            }
            break;
        } else {
            steps += Number(command)
            if (steps >= 10000) {
                console.log(`Goal reached! Good job!`);
            }
        }


    }
}


steps(['1000', '1500', '2000', '6500']);
steps(['1500', '300', '2500', '3000', 'Going home', '200'])
