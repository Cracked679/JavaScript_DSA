function capitalizeWord(arr){

    if(arr.length === 0) return [];

    return [(arr[0].toUpperCase())].concat(capitalizeWord(arr.slice(1)));
}

console.log(capitalizeWord(['My','name','is','shyam .']));