
function FootballResults(input) {
    let firstMatch = input[0];
    let secondMatch = input[1];
    let thirdMatch = input[2];

    let won = 0;
    let lost = 0;
    let drawn = 0;

    if (Number(firstMatch[0]) > Number(firstMatch[2])) {
        won += 1;
    } else if (Number(firstMatch[0]) < Number(firstMatch[2])) {
        lost += 1;
    } else {
        drawn += 1;
    }

    if (Number(secondMatch[0]) > Number(secondMatch[2])) {
        won += 1;
    } else if (Number(secondMatch[0]) < Number(secondMatch[2])) {
        lost += 1;
    } else {
        drawn += 1;
    }

    if (Number(thirdMatch[0]) > Number(thirdMatch[2])) {
        won += 1;
    } else if (Number(thirdMatch[0]) < Number(thirdMatch[2])) {
        lost += 1;
    } else {
        drawn += 1;
    }

    console.log(`Team won ${won} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${drawn}`);
} 
FootballResults(["3:1",
    "0:2",
    "0:0"]);