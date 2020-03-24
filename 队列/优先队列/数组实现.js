
// 实现方式1：入队O(1), 出队O(n);
class Pq{
    constructor(arr){
        if (arr.length){
            this.tree = arr;
            return;
        }
        this.tree = [];
    }

    // 入队
    enqueue(val){
        this.tree.push(val);
    }

    // 出队
    dequeue(){
        let maxIndex = 0;
        for (let i = 1; i < this.tree.length; i++){
            if (this.tree[i] > this.tree[maxIndex]){
                maxIndex = i;
            }
        }
        this.tree.splice(maxIndex, 1);
    }

    // 取队首
    getFirst(){
        return this.tree[0];
    }
}


// 实现方式2： 入队O(n), 出队O(1);
class Pq2{
    constructor(arr){
        if (arr.length){
            this.tree = arr;
            this.tree.sort((a, b) => {
                return b - a;
            });
            return;
        }
        this.tree = [];
    }

    // 入队
    enqueue(val){
        let t = this.tree;
        if (val > t[0]) {t.unshift(val); return;}
        if (val <= t[t.length - 1]) { t.push(val); return;}
        for (let i = 0; i <= t.length - 2; i++){
            if (t[i] >= val && val > t[i + 1]){
                t.splice(i + 1, 0, val); // 插入
                return;
            }
        }
    }

    // 出队
    dequeue(){
        this.tree.shift();
    }

    // 取队首
    getFirst(){
        return this.tree[0];
    }
}

let q = new Pq2([1,3,6,4,2])
q.enqueue(5)
console.log(q.tree)