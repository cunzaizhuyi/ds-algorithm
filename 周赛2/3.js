
var minNumberOfFrogs = function(croakOfFrogs) {
    if(croakOfFrogs.length % 5 !== 0)return -1;
    let res = 0;
    let arr = croakOfFrogs.split('');
    let arr2 = croakOfFrogs.split('');
    while(arr.length){

        let id1 = arr.indexOf('c')
        let id2 = arr.indexOf('r')
        let id3 = arr.indexOf('o')
        let id4 = arr.indexOf('a')
        let id5 = arr.indexOf('k')
        if (id5 > id4 && id4>id3 && id3>id2&&id2>id1 && id1 !==-1){

            res++;
            arr.splice(id5,1)
            arr.splice(id4,1)
            arr.splice(id3,1)
            arr.splice(id2,1)
            arr.splice(id1,1)
        }else{
            return -1
        }
    }
    let s = 0
    for(let i = 0; i <= arr2.length - 4; i++){
        let a = arr2.slice(i, i+5);
        let h = {}
        for(let i = 0; i < a.length; i++){
            h[a[i]] = ~~h[a[i]] + 1
        }
        if (Math.max(...Object.values(h)) > s) {
            s = Math.max(...Object.values(h))
        }
    }
    return s
};

//ccroraoakk
console.log(minNumberOfFrogs("crocakcroraoakk")) //2
console.log(minNumberOfFrogs("crocracokrakoak")) //3