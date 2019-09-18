//This is example of Sliding Window Pattern

function maxSubarraySum(arr, num) {

    if (arr.length < num)
        return null;

    let tempsum = 0;
    let maxsum = 0;

    for (let i = 0; i < num; i++) {
        maxsum += arr[i];
    }

    tempsum = maxsum;

    for (let i = num; i < arr.length; i++) {
        tempsum = tempsum - arr[i - num] + arr[i];
        maxsum = Math.max(tempsum, maxsum);
    }
    return maxsum;
}

maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 1, 2, 3, 2], 3);
