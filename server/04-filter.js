const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = words.filter(word => word.length <= 6)

console.log('Filter', newArray);
console.log('Original', words);

// Filter 
const orders = [
  {
    name: 'Ana',
    total: 1000,
    status: 'pending',
  },
  {
    name: 'Santiago',
    total: 2000,
    status: 'pending',
  },
  {
    name: 'Catalina',
    total: 3000,
    status: 'delivered',
  },
  {
    name: 'Jose',
    total: 4000,
    status: 'pending',
  },
];

const pendingOrders = orders.filter(order => order.status === 'pending' && order.total >= 2000);

console.log('pendingOrders', pendingOrders);

const search = (query) => {
    return orders.filter(order => {
        return order.name.toLowerCase().includes(query.toLowerCase());
    })
}

console.log('search', search('an'));