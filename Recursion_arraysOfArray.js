function flatten(arr) {
    if (arr.length === 0)
        return [];

    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
