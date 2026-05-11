const numbers = [1, 8, 9, 2, 3, 4, 5, 6, 7]
numbers.sort()
console.log(numbers)

const products = [
    { id: 1, name: "Lechuga", price: 1000 },
    { id: 2, name: "Cebolla", price: 2000 },
    { id: 3, name: "Tomate", price: 3000 }
]
products.sort((a, b) => b.price - a.price)
console.log(products)