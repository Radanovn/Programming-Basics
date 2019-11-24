'use strict'

function solve(input) {
 
    let num = input.shift();
    let primeSum = 0;
    let nonPrimeSum = 0;
 
    while (num !== "stop") {
        num = +(num);
        let prime = true;
        if (num === 1) {
            prime = false;
        }
        if (num < 0) {
            console.log(`Number is negative.`);
            num = input.shift();
            continue;
        }
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0 && i !== num) {
                prime = false;
            }
 
        }
        if (prime) {
            primeSum += num
        } else {
            nonPrimeSum += num;
        }
        num = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}