const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20, 23, 24]

const isPair = numbers.findLastIndex(item => item % 2 === 0)
console.log(isPair);
console.log(numbers[isPair]);