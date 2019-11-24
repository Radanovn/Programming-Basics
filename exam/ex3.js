
// function Snooker(input) {
//     let country = input.shift();
//     let tool = input.shift();

//     let difficult = 0;

//     let performance = 0;

//     if (country == 'Russia') {
//         switch (tool) {
//             case 'ribbon':
//                 difficult = 9.100;
//                 performance = 9.400;
//                 break;

//             case 'hoop':
//                 difficult = 9.300;
//                 performance = 9.800;
//                 break;

//             case 'rope':
//                 difficult = 9.600;
//                 performance = 9.000;
//                 break;

//             default:
//                 break;
//         }

//     }
//     if (country == 'Bulgaria') {
//         switch (tool) {
//             case 'ribbon':
//                 difficult = 9.600;
//                 performance = 9.400;
//                 break;

//             case 'hoop':
//                 difficult = 9.550;
//                 performance = 9.750;
//                 break;

//             case 'rope':
//                 difficult = 9.500;
//                 performance = 9.400;
//                 break;

//             default:
//                 break;
//         }

//     }
//     if (country == 'Italy') {
//         switch (tool) {
//             case 'ribbon':
//                 difficult = 9.200;
//                 performance = 9.500;
//                 break;

//             case 'hoop':
//                 difficult = 9.450;
//                 performance = 9.350;
//                 break;

//             case 'rope':
//                 difficult = 9.700;
//                 performance = 9.150;
//                 break;

//             default:
//                 break;
//         }

//     }

//     let score = difficult + performance;
//     let difference = 20 - score;
//     let pointsLeft = (difference / 20) * 100;

//     console.log(`The team of ${country} get ${score.toFixed(3)} on ${tool}.`);
//     console.log(pointsLeft.toFixed(2) + '%');
// }
// Snooker(['Bulgaria', 'ribbon']);

// function Darts(input){
//     let name = input.shift();
//     let points = 301;
//     let unsuccesfullStrikes = 0;
//     let successfulStrikes = 0;

    
//     while(true) {
//         let row = input.shift();
//         if(row == 'Retire'){
//             console.log(`${name} retired after ${unsuccesfullStrikes} unsuccessful shots.`);
//             return;
//         } else{
//             let strike = row;
//             let strikePoints = Number(input.shift());

//             if(strike == 'Triple'){
//                 strikePoints = strikePoints * 3;
//             } else if (strike == 'Double'){
//                 strikePoints = strikePoints * 2;
//             }

//             if(points - strikePoints > 0){
//                 points = points - strikePoints;
//                 successfulStrikes += 1;
//             } else if( points - strikePoints < 0) {
//                 unsuccesfullStrikes += 1;

//             } else if(points - strikePoints == 0){
//                 successfulStrikes += 1;
//                 console.log(`${name} won the leg with ${successfulStrikes} shots.`);
//                 return;
//             }
//         }
        
//     }
// }

function fitness(input){
    let people = input.shift();

    let back = 0;
    let legs = 0;
    let abs = 0;
    let chest = 0;

    let proteinShake = 0;
    let proteinBar = 0;

    for(let i = 0; i< input.length; i++){
        if(input[i] == 'Back'){
            back +=1;
        } else if(input[i] == 'Chest'){
            chest +=1;
        }else if(input[i] == 'Legs'){
            legs += 1;
        }else if(input[i] == 'Abs'){
            abs+=1;
        }else if(input[i] == 'Protein shake'){
            proteinShake+=1;
        }else if(input[i] == 'Protein bar'){
            proteinBar +=1;
        }
    }

    let trainingPeople = back + chest + legs + abs;
    let consumingPeople = proteinBar + proteinShake;
    
    let trainingPercent = (trainingPeople / people) * 100;
    let consumingPercent = (consumingPeople / people) * 100;

    if(trainingPeople == 0){
        trainingPercent = 0;
    }

    if(consumingPeople == 0){
        consumingPercent = 0;
    }

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinBar} - protein shake`);
    console.log(`${proteinShake} - protein bar`);
    console.log(trainingPercent.toFixed(2) + '% - work out');
    console.log(consumingPercent.toFixed(2) + '% - protein');

}

fitness([10, 'Back', 'Chest', 'Legs', 'Abs', 'Protein shake', 'Protein bar', 'Protein shake', 'Protein bar', 'Legs', 'Abs'])