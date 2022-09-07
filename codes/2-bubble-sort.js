const arr = [45, 36, 12, 89, 37, 56, 10, 123, 20, 563, 3, 22, 1];

function bubbleSort(arr) {
    if (arr == null || arr.length < 2) {
        return;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            } 
        }
    }
    // for (let i = arr.length - 1; i > 0; i--) {
    //     for (let j = 0; j < i; j++) {
    //         if (arr[j] > arr[j + 1] ) {
    //             swap(arr, j, j + 1);
    //         } 
    //     }
    // }
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

bubbleSort(arr);
console.log(arr);