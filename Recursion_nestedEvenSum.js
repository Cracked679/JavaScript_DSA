function nestedEvenSum(obj) {

    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;

}

var obj1 = {
    "rollno": 2,
    id: {
        "first": 4,
        "second": 6,
        secureid: {
            "last": 8
        }
    }
};

console.log(nestedEvenSum(obj1));
