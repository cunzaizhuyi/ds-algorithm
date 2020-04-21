

var reformat = function(s) {
    let arr = s.split('');
    let charArr = [];
    let nArr = []
    for(let i = 0; i < arr.length; i++){
        if(/[0-9]/.test(arr[i])){
            nArr.push(arr[i])
        }else{
            charArr.push(arr[i])
        }
    }
    if (Math.abs(nArr.length - charArr.length) >= 2){
        return ''
    }
    let str = '';
    let p = nArr.length > charArr.length ? 1: 2;
    while(nArr.length || charArr.length){
        if(p===1){
            str += nArr.pop();
            p=2;
        }else{
            str+= charArr.pop();
            p=1
        }
    }
    return str;
};

console.log(reformat('a0b1c2'))