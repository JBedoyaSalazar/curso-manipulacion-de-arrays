const items = [1, 2, 3, 2, 4, 5, 4, 3, 5, 2];

const obj = items.reduce((acc, item) => {
    if(!acc[item]){
        acc[item] = 1;
    } else {
        acc[item] = acc[item] + 1
    }

    return acc
}, {})

console.log(obj);
