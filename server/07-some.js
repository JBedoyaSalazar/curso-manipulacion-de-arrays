const numbers = [1, 2, 5, 8, 9];

const rta = numbers.some(item => item % 2 === 0);

console.log(rta);

const rta2 = numbers.filter(item => item % 2 === 0);

console.log(rta2);

const dates = [
    {
        name: "Product 1",
        startDate: new Date(2021, 1, 1),
        endDate: new Date(2021, 1, 5),
    },
    {
        name: "Product 2",
        startDate: new Date(2021, 1, 10),
        endDate: new Date(2021, 1, 15),
    },
    {
        name: "Product 3",
        startDate: new Date(2021, 1, 20),
        endDate: new Date(2021, 1, 25),
    },
];

const rt3 = dates.some(date => date.startDate.getFullYear() === 2021)

console.log(rt3);