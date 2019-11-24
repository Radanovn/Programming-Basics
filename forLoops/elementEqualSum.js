function elementEqualSum(input) {
    let n = Number(input.shift());
    
    
    let sum = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < n; i++){
        let num = Number(input[i]);
        sum += num;
        
        if (num > maxNum){
            maxNum = num;
        }
   
    }
    sum -= maxNum;
    if(sum === maxNum){
        console.log(`Yes\nSum = ${sum}`);

    }else{
        console.log(`No\nDiff = ${Math.abs(sum - maxNum)}`)
    }

}