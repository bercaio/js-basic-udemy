let digiteNum = Number(prompt('Digite um numero'));


console.log(typeof digiteNum)
document.body.innerHTML = `<h1>Seu numero: ${digiteNum} </h1>`;
document.body.innerHTML += `${digiteNum} é inteiro: ${Number.isInteger(digiteNum)} </br>`;
document.body.innerHTML += `NaN: ${isNaN(digiteNum)}</br>`;
document.body.innerHTML += `Arrendondar para baixo: ${Math.floor(digiteNum)}</br>`;
document.body.innerHTML += `Arrendonadr para cima: ${Math.ceil(digiteNum)}</br>`;
document.body.innerHTML += `Com duas casas decimais: ${digiteNum.toFixed(2)}</br>`;
