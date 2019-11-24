'use strict';

function exam(input) {

    let inputBadGrades = +(input.shift());





    let badCounter = 0;
    let lastExam = '';
    let sumGrades = 0;
    let counterForGrades = 0




    while (inputBadGrades !== badCounter) {
        let examName = input.shift();
        let grade = +(input.shift());

        if (examName == 'Enough') {


            console.log(`Average score: ${(sumGrades / counterForGrades).toFixed(2)}`);
            console.log(`Number of problems: ${counterForGrades}`);
            console.log(`Last problem: ${lastExam}`);
            return;
        }

        if (grade <= 4) {
            badCounter++
        }
        lastExam = examName;
        sumGrades += grade;
        counterForGrades++;
   

    }
    console.log(`You need a break, ${badCounter} poor grades.`);
    


}