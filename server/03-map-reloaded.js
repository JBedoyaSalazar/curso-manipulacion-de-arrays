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
    status: 'pending',
  },
  {
    name: 'Jose',
    total: 4000,
    status: 'pending',
  },
];
console.log('--------------------------------');
console.log('Original', orders);

console.log('--------------------------------');

const totalOrders = orders.map(item => item.total)
console.log(`Total recaudado ${totalOrders}`);


const newArraywithTaxes = orders.map(order => {
    return {
        ...order,
        taxes: order.total * 0.19
    }
})

console.log('--------------------------------');
console.log('Array con taxes', newArraywithTaxes);
console.log('Array original', orders);
console.log('--------------------------------');