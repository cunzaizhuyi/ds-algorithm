

var minJump = function(jump) {
    if(jump.length === 1)return 1;

    let cnt = 1;
    let p = 0;
    let n = jump[0];
    if (n > jump.length - 1) return 1;
    while(true){
        let newN = n + jump[n];
        if (newN > jump.length - 1) return ++cnt;


        let t = newN;
        let tt = newN;
        let ti = newN;
        let tti = newN;
        for(let i = n+1; i <= newN; i++){
            if (i + jump[i] > newN){
                t = i + jump[i];
                ti = i;
            }
        }
        for(let i = p + 1; i <= n - 1; i++){
            if (i + jump[i] > newN){
                tt = i + jump[i];
                tti = i;
            }
        }
        if(t >= tt){
            p = n;
            n = newN;
            cnt++;
        }else{
            p = n;
            n = tti;
            cnt++;
        }
    }
};

console.log(minJump([1,2,8,1,3,1,1,1]))
// console.log(minJump([2, 5, 1, 1, 1, 1]))
// console.log(minJump([4, 1, 1, 12, 1, 11, 1, 1, 2, 3, 4, 1, 7, 3, 1, 82, 52, 13]))