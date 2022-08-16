
function criarProduto(nome, preco) {
    return { nome, preco };
}

const prod1 = criarProduto('arroz', 13.80);
const prod2 = criarProduto('feijao', 10.20);
const prod3 = criarProduto('carne', 200.30);

console.log(prod1.nome);
console.log(prod2);


/****************************************************/

const compra = {
    produto: 'Farofa',
    preco: 12,

    fala() {
        console.log(`Voce escolheu o produto ${this.produto}`)
    },

    incrementoPrec() {
        this.preco++
        console.log(this.preco)
    }
};

compra.fala();
compra.incrementoPrec();
compra.fala();
compra.incrementoPrec();
compra.fala();
compra.incrementoPrec();