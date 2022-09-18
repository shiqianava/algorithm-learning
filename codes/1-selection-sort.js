const arr = [45, 36, 12, 89, 37, 56, 10, 123, 20, 563, 3, 22, 1];

function selectionSort(arr) {
    if (arr == null || arr.length < 2) {
        return;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex =  j;
            }
        }
        swap(arr, i, minIndex);
    }
}

function swap(arr, i, minIndex) {
    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
}

// 比较器方法，用系统提供的排序方法，排序复制的数组arr2
function comparator(arr) {
    arr.sort((a, b) => a - b);
}

function generateRandomArray(maxSize, maxValue) {
    let arr = new Array(parseInt((maxSize + 1) * (Math.random())));
    for (let i = 0; i < arr.length; i++) {
        // 减数是maxValue + 1，被减数为什么不是？
        // 数值范围 (-maxValue, maxValue]
        arr[i] = parseInt((maxValue + 1) * Math.random()) - parseInt(maxValue * Math.random());
    }

    return arr;
}

function isEqual(arr1, arr2) {
    if ((arr1 == null && arr2 != null) || (arr1 != null && arr2 == null)) {
        return false;
    }
    if (arr1 == null && arr2 == null) {
        return true;
    }
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}

// for test
let testTime = 100000;
let maxSize = 100;
let maxValue = 100;
let succeed = true;
for (let i = 0; i < testTime; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue);
    // ES6方法，数组是深拷贝-值复制，数组内的元素是浅拷贝-引用地址，比如二维数组
    // 此处只是整型数组，只复制数组
    let arr2 = [...arr1];
    selectionSort(arr1);
    comparator(arr2);
    if (!isEqual(arr1, arr2)) {
        succeed = false;
        console.log(arr1);
        console.log(arr2);
        break;
    }
}

console.log(succeed? "Nice!" : "Fucking fucked");