'use strict';

function pcStore(input) {
    let moneyForProcessor = +(input.shift());
    let moneyForVideoCard = +(input.shift());
    let moneyRam = +(input.shift());
    let allRams = +(input.shift());
    let discountPercent = +(input.shift());

    let moneyForProcessorLeva = moneyForProcessor * 1.57;
    let videoLeva = moneyForVideoCard * 1.57;
    let moneyRamLeva = moneyRam * 1.57;
    let allRamsSum = moneyRamLeva * allRams

    let processor = moneyForProcessorLeva - (moneyForProcessorLeva * discountPercent)
    let videoCard = videoLeva - (videoLeva * discountPercent)
    let sum = processor + videoCard + allRamsSum

    console.log(`Money needed - ${sum.toFixed(2)}`);

}  pcStore([500,
    200,
    80,
    2,
    0.05]) 
