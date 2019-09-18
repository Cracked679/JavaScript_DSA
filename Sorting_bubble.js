function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps)
            break;
        //This ensures that loop does not continue after last swap
        console.log("One Pass Done!");
    }
    return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 7, 6]);
