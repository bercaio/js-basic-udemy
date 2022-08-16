let varA = 'A';
let varB = 'B';
let varC = 'C';
let varX = null;

varX = varA
varA = varB;
varB = varC;
varC = varX;

console.log(varA);
console.log(varB);
console.log(varC);