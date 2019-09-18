function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

selectionSort([2, 4, 1, 6, 8, 3, 9, 10, 45, 37, 0]);
