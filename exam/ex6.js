function Basketball(input) {
    let win = 0;
    let lose = 0;
    let totalRounds = 0;
 
    while (true) {
        let row = input.shift();
 
        if (row == 'End of tournaments'){
            let winPercent = (win / totalRounds) * 100;
            let losePercent = (lose / totalRounds) * 100;
            console.log(`${winPercent.toFixed(2)}% matches win`);
            console.log(`${losePercent.toFixed(2)}% matches lost`);
            break;
 
        } else {
            let tournamentName = row;
            let roundsCount = Number(input.shift());
            totalRounds += roundsCount;
            for (let i = 0; i < roundsCount; i++) {
                let firstMatch = input.shift();
                let secondMatch = input.shift();
                let result = 0;
 
                if (firstMatch > secondMatch) {
                    win += 1;
                    result = firstMatch - secondMatch;
                    console.log(`Game ${i+1} of tournament ${tournamentName}: win with ${result} points.`);
                } else {
                    lose += 1;
                    result = secondMatch - firstMatch;
                    console.log(`Game ${i+1} of tournament ${tournamentName}: lost with ${result} points.`);
                }
            }
        }
    }
}
BasketballTournament([])