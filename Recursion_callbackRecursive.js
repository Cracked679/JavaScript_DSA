function callbackRecursive(arr, callback) {

    if (arr.length === 0)
        return false;

    if (callback(arr[0]))
        return true;

    return callbackRecursive(arr.slice(1), callback);

}

// const isEven = val => val % 2 === 0;

console.log(callbackRecursive([7, 6, 8], val=>val < 5));
