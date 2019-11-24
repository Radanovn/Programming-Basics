function scholarship(input) {
    let salary = Number(input.shift());
    let averageSuccess = Number(input.shift());
    let minSalary = Number(input.shift());


    let socialScholarship = minSalary * 0.35;
    let fullScholarship = averageSuccess * 25;

    let socMoney = socialScholarship.toFixed(2);
    let bonMoney = fullScholarship.toFixed(2);

    if ((salary > minSalary) && (averageSuccess < 5.50)) {
        console.log("You cannot get a scholarship!")
    } else if ((salary >= minSalary) && (averageSuccess >= 5.50)) {
        console.log(`You get a scholarship for excellent results ${Math.floor(fullScholarship)} BGN`);
    } else if ((salary < minSalary) && (averageSuccess < 4.50)) {
        console.log("You cannot get a scholarship!");
    } else if ((salary < minSalary) && (averageSuccess >= 4.50) && (averageSuccess < 5.50)) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if ((salary < minSalary) && (averageSuccess >= 5.50) && (socMoney > bonMoney)) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if ((salary < minSalary) && (averageSuccess >= 5.50) && (socMoney <= bonMoney)) {
        console.log(`You get a scholarship for excellent results ${Math.floor(bonusMoney)} BGN`);
    }
}