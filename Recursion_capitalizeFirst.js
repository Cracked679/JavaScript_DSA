function capitalizeFirst(arr) {
    if (arr.length === 0)
        return [];

    let word = arr[0];
    word = word[0].toUpperCase() + word.slice(1);

    return [word].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana']))
