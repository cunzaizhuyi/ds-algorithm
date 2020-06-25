

// 判断一个字符串里面有无重复字符
var hasRepeatChar = (str) => {
    let h = {}
    for(let i = 0; i < str.length; i++){
        if(h[str[i]])return false;
        h[str[i]] = true
    }
    return true;
}