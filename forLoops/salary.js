'use strict';

function salaryy(input) {
    let tabs = +(input[0]);
    let salary = +(input[1]);
    let penalty = 0;

    for (let i = 2; i <= tabs + 1; i++) {
        let sites = input[i];


        switch (sites) {
            case 'Facebook': penalty += 150; break;
            case 'Instagram': penalty += 100; break;
            case 'Reddit': penalty += 50; break;
            default: break;

        }


        if (penalty >= salary) {
            console.log(`You have lost your salary.`)
            return;

        }
    }
    salary = salary - penalty;
    console.log(salary);

}


salaryy([10,
    750,
    'Facebook',
    'Dev.bg',
    'Instagram',
    'Facebook',
    'Reddit',
    'Facebook',
    'Facebook'])