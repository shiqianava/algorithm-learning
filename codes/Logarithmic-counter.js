function generateRandomArray(maxSize, maxValue) {
    let arr = new Array(parseInt((maxSize + 1) * (Math.random())));
    for (let i = 0; i < arr.length; i++) {
        // 减数是maxValue + 1，被减数为什么不是？
        // 数值范围 (-maxValue, maxValue]
        arr[i] = parseInt((maxValue + 1) * Math.random()) - parseInt(maxValue * Math.random());
    }

    return arr;
}

// for test
let testTime = 500000;
let maxSize = 100;
let maxValue = 100;
for (let i = 0; i < testTime; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue);
    let arr2 = [...arr1];
}
