
function printar(nome, empresa){
    console.log(`Bom dia ${nome}`);
    return `Seja bem vindo a empresa ${empresa}`;
};

const variavel = printar('Caio', 'LufTal');
console.log(variavel);


const mensagem = (nome, empresa) =>  {
    return `Bom dia ${nome}, seja bem vindo a ${empresa}`;
};

console.log(mensagem('Lurinald', 'HasteSmell'));


const mostar = (nome, empresa) =>  `Bom dia ${nome}, seja bem vindo a ${empresa}`;

console.log(mostar('Brek', 'HostHost'));
