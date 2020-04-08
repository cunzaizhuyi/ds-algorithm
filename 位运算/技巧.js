
// 判断整数n右数第K位是不是1
let is1FromRightK = (n, k) => {
    return !!(n & (1 << (k-1)));
};
// '1011' 即求11的二进制表示，右数第4位是否为1
console.log(is1FromRightK(11, 4));


// =========================================

// 将整数n右数第K为设为1
let set1FromRightK = (n, k) => {
    return n | (1 << (k - 1));
};

// 将整数n右数第K为设为0
let set0FromRightK = (n, k) => {
    return n & ~(1 << (k - 1));
};

// =========================================

// n & n-1的两个妙用

// 将整数n二进制表示中最右侧的那个1置为0
let set0Last1 = (n) => {
    return n & n-1;
};

// 判断n是不是Math.pow(2, X)：2的幂
let is2N = (n) => {
    return n & (n - 1) === 0
};

// =======================================
// 判断整数n的二进制表示有几个1
let cntOf1 = (n) => {
    let cnt = 0;
    while(n){
        if (n % 2 === 1){
            cnt++;
        }
        n = ~~(n / 2);
    }
    return cnt;
};

// 位运算解法
let cntOf1_b = (n) => {
    let cnt = 0;
    while(n){
        cnt += n & 1;
        n = n >> 1;
    }
    return cnt;
};

// 位运算解法2
let cntOf1_b2 = (n) => {
    let cnt = 0;
    while(n){
        n = n & (n - 1); // 将最右侧的那个1置为0；
        cnt++;
    }
    return cnt;
};