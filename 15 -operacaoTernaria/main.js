const pointUser = 1000;
const userColor = 'pink';

const levelUser = pointUser >= 1000 ? 'Nivel VIP' : 'Nivel Normal';
const patternUser = userColor || 'preta'; // => patternUser tem valor setado

console.log(levelUser, patternUser)


// if (pointUser >= 1000){
//     console.log('Nivel VIP')
// } else{
//     console.log('Nivel Normal')
// }