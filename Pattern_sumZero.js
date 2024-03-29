//This is an example of Multiple Pointer Pattern

function sumZero(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }

    }

}

sumZero([-4, -3, -2, 1, 0, 2, 3, 4, 5]);
