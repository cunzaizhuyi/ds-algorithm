
var displayTable = function(orders) {
    let a = [...orders]
    // 餐桌顺序
    orders.sort((a, b) => {
        return a[1] / 1 - b[1] / 1;
    })

    // 菜顺序
    let cai = new Set()
    for(let i = 0; i < a.length; i++){
        cai.add(a[i][2])
    }
    let caiA = Array.from(cai).sort();

    let res = [];
    res[0] = ['Table', ...caiA];
    console.log(orders)

    // 第一列Canzhuo
    let t = new Set();
    for(let i = 0; i < orders.length; i++){
        t.add(orders[i][1])
    }
    let tA = Array.from(t);
    for(let i = 0; i < tA.length; i++){
        res.push([tA[i]]);
    }

    for(let i = 1; i < res.length; i++){
        for(let j = 1; j < res[0].length; j++){
            res[i][j] = '0';
        }
    }

    for(let i = 0; i < orders.length; i++){
        let rIdx = tA.indexOf(orders[i][1]) + 1;
        let cIdx = caiA.indexOf(orders[i][2]) + 1;
        res[rIdx][cIdx] =  (res[rIdx][cIdx] / 1 + 1) + '';
    }
    return res;
};

// console.log(displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]))