const matriz = [
    [1,2,3],
    [4,5,6, [7,8,9]],
    [10,11,12]
]

const flatMatriz = matriz.flat(3)
console.log(flatMatriz);

const users = [
    {userId: 1, userName: 'ana', attributes: ['smart', 'loyal']},
    {userId: 2, userName: 'martha', attributes: ['happy', 'nice']},
    {userId: 3, userName: 'mauricio', attributes: ['cute', 'smart']}
]

const atributtesUsers = users.flatMap(user => user.attributes)
console.log(atributtesUsers);