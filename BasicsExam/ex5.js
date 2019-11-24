'use strict';

function solve(input) {
 
  let pasangers = +(input.shift());
  let stops = +(input.shift());

  for (let i = 1; i <= stops; i++) {
      let peopleOut = +(input.shift());
      let peopleIn = +(input.shift());

      if (i % 2 !== 0) {
          pasangers = pasangers - peopleOut + peopleIn + 2
      } else {
          pasangers = pasangers - peopleOut + peopleIn - 2
      }
  }
  console.log(`The final number of passengers is : ${pasangers}`);
}