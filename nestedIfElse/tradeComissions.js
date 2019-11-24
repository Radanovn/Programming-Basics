'use strict';

function tradeComissions(input) {

    let city = (input.shift()).toLowerCase();
    let sales = Number(input.shift());

    let comission = -1;

    if (sales < 0 || city !== 'sofia' || city !== 'plovdiv' || city !== 'varna') {
        console.log('error');
    }
    else {

        if (city == 'sofia') {
            if (sales >= 0 && sales <= 500) {
                comission = sales * 0.05;
            }
            else if (sales > 500 && sales <= 1000) {
                comission = sales * 0.07;
            }
            else if (sales > 1000 && sales <= 10000) {
                comission = sales * 0.08;
            }
            else if (sales > 1000) {
                comission = sales * 0.12;
            }



            console.log(`${comission.toFixed(2)}`)

        }

        if (city == 'varna') {
            if (sales >= 0 && sales <= 500) {
                comission = sales * 0.045;
            }
            else if (sales > 500 && sales <= 1000) {
                comission = sales * 0.075;
            }
            else if (sales > 1000 && sales <= 10000) {
                comission = sales * 0.1;
            }
            else if (sales > 1000) {
                comission = sales * 0.13;
            }

            console.log(`${comission.toFixed(2)}`)
        }



        if (city == 'plovdiv') {
            if (sales >= 0 && sales <= 500) {
                comission = sales * 0.055;
            }
            else if (sales > 500 && sales <= 1000) {
                comission = sales * 0.08;
            }
            else if (sales > 1000 && sales <= 10000) {
                comission = sales * 0.12;
            }
            else if (sales > 1000) {
                comission = sales * 0.145;
            }


            console.log(`${comission.toFixed(2)}`)


        }


    }
}
tradeComissions(['Sofia'
    , 1500])
tradeComissions(['Plovdiv', 499.99]);
tradeComissions(['Varna',
    3874.50])
tradeComissions(['Kaspichan',
    -50])