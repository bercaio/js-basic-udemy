
const produtos = [];
const form = document.querySelector('.form');

function gravar(evento) {
    evento.preventDefault();

    const produto = {
        nome: form.nome.value,
        marca: form.marca.value,
        peso: parseFloat(form.peso.value),
        preco: parseFloat(form.preco.value)
    }

    produtos.push(produto);

    console.log(produtos);
}
form.addEventListener('submit', gravar);


