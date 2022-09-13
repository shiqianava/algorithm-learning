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

selectionSort(arr);
console.log(arr);