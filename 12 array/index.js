const nome = ['Caio', 'Jeff', 'Creiton' ];

nome.unshift('Florentia'); // Adiciona ao comeco do Array
nome.push('Orisvaldo'); // adiciona ao final do Array

const removInicio = nome.shift(); // Remove do comeco do Array
const removFinal = nome.pop(); // Remove do final do Array

console.log(nome);

const deletar = delete nome[1]; // remover objct do indice 
nome[1] = 'Xanaloca'
 

console.log(removInicio);
console.log(removFinal);
console.log(deletar);
console.log(nome);
console.log(nome.length);