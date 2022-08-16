
function meuEscopo() {
    const form = document.querySelector('.form');


    const pessoa = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();


        const nome = form.querySelector('.nome').value;
        const marca = form.querySelector('.marca').value;
        const peso = form.querySelector('.peso').value;
        const preco = form.querySelector('.preco').value;

        pessoa.push({
            nome: nome,
            marca: marca,
            peso: peso,
            preco: preco
        });

        console.log(nome);

    }

    console.log(nome);
    form.addEventListener('submit', recebeEventoForm)
    console.log(form)

}
meuEscopo();