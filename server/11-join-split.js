const elements = ['Fire', 'Water', 'Air', 'Earth']

const join = elements.join('/')
console.log(join);

const title = 'New Course In - New York Times - Go Now'
const split = title.split('-')
console.log(split);

console.log(title.split(' ').join('/').toLocaleLowerCase().trim())