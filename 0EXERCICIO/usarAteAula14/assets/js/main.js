 /* Feito pot mim */
 
const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const peso = parseFloat(form.querySelector('#peso').value)
    const altura = parseFloat(form.querySelector('#altura').value)

    const imc = peso / (altura * altura)

    if (imc < 18.5) {
        document.querySelector('#resposta').innerHTML = (`Seco demais ${imc}`)
    } 
    else if (imc >= 18.5 && imc <= 24.9) {
        document.querySelector('#resposta').innerHTML = (`Peso normal ${imc}`)
    } 
    else if (imc >= 25 && imc <= 29.9) {
        document.querySelector('#resposta').innerHTML = (`Sobrepeso ${imc}`)
    } 
    else if (imc >= 30 && imc <= 34.9) {
        console.log(`Otario`);
        document.querySelector('#resposta').innerHTML = (`Obesidade GRAU I  ${imc}`)
    } 
    else{
        console.log(`Error`);
        document.querySelector('#resposta').innerHTML = (`Fora do limite ${imc}`)
    }

    console.log(`${imc}`);
});