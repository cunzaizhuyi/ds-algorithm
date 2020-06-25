

// 求前缀和
var runningSum = function(nums) {
    if(!nums.length) return [];

    let sumArr = [nums[0]];
    for(let i = 1; i < nums.length; i++){
        sumArr.push(sumArr[i - 1] + nums[i]);
    }
    return sumArr;
};