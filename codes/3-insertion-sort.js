const arr = [45, 36, 12, 89, 37, 56, 10, 123, 20, 563, 3, 22, 1];

function insertionSort(arr) {
    if (arr == null || arr.length < 2) {
        return;
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }

        // j--，循环向左进行时，要注意数组下标小于0，越界
        // for (let j = i; j >= 0; j--) {
        //     if (arr[j] < arr[j - 1]) {
        //         swap(arr, j, j + 1);
        //     }
        // }
    }

}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

insertionSort(arr);
console.log(arr);
