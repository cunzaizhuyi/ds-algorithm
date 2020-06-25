


let headSort = (arr) => {
    let heapify = (heap, index) => {
        if (index > ~~(heap.length / 2) - 1) return;

        let l = index * 2 + 1 > heap.length - 1 ? index: index * 2 + 1;
        let r = index * 2 + 2 > heap.length - 1 ? index: index * 2 + 2;
        let max = Math.max(heap[index], heap[l], heap[r]);
        if (max === heap[index]) return;
        // 互换顺序 与 递归
        let maxIndex = heap[l] > heap[r] ? l: r;
        [heap[maxIndex], heap[index]] = [heap[index], heap[maxIndex]];
        heapify(heap, maxIndex);
    }

    let build_heap = (arr) => {
        let startIndex = ~~(arr.length / 2) - 1;
        while(startIndex !== -1){
            heapify(arr, startIndex);
            startIndex--;
        }
        return arr;
    }

    // 排序过程。先建堆，然后不断调用heapify()的过程
    let heap = build_heap(arr);
    let res = [];
    while(heap.length !== 0){
        // 取出堆最大数
        res.unshift(heap.shift());
        // 将最后一个叶子节点移动到堆顶head上
        if (heap.length >= 1){
            heap.unshift(heap.pop());
            // 进行heapify重新建堆
            heapify(heap, 0);
        }
    }
    return res;
}

let arr = [5, 3, 7, 9, 1, 2, 8, 4, 6];
console.log(headSort(arr));