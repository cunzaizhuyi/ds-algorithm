
var getTime = (a, sumArr) => {
    let l = 0;
    let r = sumArr.length - 1;
    while(l <= r){
        let m = ~~((l+r)/2);
        if ((sumArr[m][0] >= a[0] && sumArr[m][1] >= a[1]&& sumArr[m][2] >= a[2]) &&
            (sumArr[m-1][0]<a[0]||sumArr[m-1][1]<a[1] || sumArr[m-1][2] < a[2])){
            return m;
        }else if((sumArr[m][0]<a[0]||sumArr[m][1]<a[1] || sumArr[m][2] < a[2])){
            l = m + 1
        }else{
            r = m - 1;
        }
    }
}


var getTriggerTime = function(increase, requirements) {
    let ans = [];

    // 求前缀和
    let sumArr = [[0,0,0]];
    for(let i = 0; i < increase.length; i++){
        let [a, b, c] = sumArr[i];
        let [aa, bb, cc] = increase[i];
        sumArr[i+1] = [a + aa, b + bb, c + cc];
    }

    for(let i = 0; i < requirements.length; i++){
        let [a, b, c] = requirements[i];
        let [d, e, f] = sumArr[sumArr.length - 1];
        if (requirements[i].join('') === '000'){
            ans[i] = 0;
        } else if (a > d || b > e || c > f){
            ans[i] = -1;
        }else{
            ans[i] = getTime(requirements[i], sumArr)
        }
    }
    return ans;
};

// console.log(getTriggerTime([[2,8,4],[2,5,0],[10,9,8]],
//     [[2,11,3],[15,10,7],[9,17,12],[8,1,14]]))

// console.log(getTriggerTime([[1,1,1]],[[0,0,0]]))