var minCount = function(coins) {
    if(!coins.length)return 0;
    let cnt = 0
    for(let i = 0; i < coins.length; i++){
        cnt += Math.ceil(coins[i] / 2)
    }
    return cnt
};