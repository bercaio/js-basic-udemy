const numero = 5;
let letra = '10'
let letras = '10.5'
// Nao tem valor declarado - Deve ser inicializada no momento da sua declaracao;
// Só podem ser utilizadas após sua declaração;
// Uma vez atribuido valor a 'const' nao pode ser modificado; 


console.log(typeof numero); // Tipo de dado Number;
console.log(typeof letra); // Tipo de dado String;


letra = parseInt(letra);
letra = Number(letra);
letras = parseFloat(letras);

console.log(' String para ' + typeof letra);
console.log(' String para ' + typeof letra);
console.log(' String para ' + typeof letras);