function basketball (input){
    let yearPrice = +(input.shift());

    let shoes = yearPrice-(yearPrice * 0.4);
    let equip = shoes - (shoes * 0.2);

    let ball = equip / 4;
    let accesoaries = ball / 5;

    let total = yearPrice +equip +shoes + ball + accesoaries;
console.log(total.toFixed(2));
}
basketball([320]);

