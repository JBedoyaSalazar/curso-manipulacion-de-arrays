const products = [
    {id:1, name: "Lechuga", price: 1000},
    {id:2, name: "Cebolla", price: 2000},
    {id:3, name: "Tomate", price: 3000}
]

const myProducts = []

const product = products.find(product => product.id === 1)
if(product){
    myProducts.push(product)
    products.splice(products.findIndex(product => product.id === 1), 1)
}

console.log('products', products)
console.log('myProducts', myProducts)

const productsV3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
]

const updates = {
    id: '🍔',
    changes: { price: 200, name: 'Burger man', description: "delicious" }
}

const productIndex = productsV3.findIndex(product => product.id === updates.id)
if(productIndex !== -1){
    productsV3[productIndex] = { ...productsV3[productIndex], ...updates.changes }
}

console.log('productsV3', productsV3)