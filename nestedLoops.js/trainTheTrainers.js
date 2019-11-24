'use strict';


function trainTheTrainers(input) {
    let n = +(input.shift());
    let totalSum = 0;
    let line = input.shift();
    let count = 0;
    while(line != 'Finish'){
        let sumOfGrade = 0;
        for(let i = 0 ; i < n; i++){
            let grade = +(input.shift());
            sumOfGrade += grade;
            count++;
        }
        totalSum += sumOfGrade;
        let avg = sumOfGrade / n;
        console.log(`${line} - ${avg.toFixed(2)}.`)
        line = input.shift();

    }
    let average = totalSum / count;
    console.log(`Student's final assessment is ${average.toFixed(2)}.`)
}