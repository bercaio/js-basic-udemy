let nome ; 
// Tem valor declarado 'undefined';
// Só podem ser utilizadas após sua declaração;
// Funcao em bloco;
var exibeMensagem = function() {
    if(true) { 
        var escopoFuncao = 'Funcao'; 
        let escopoBloco = 'Bloco';

       console.log(escopoBloco); // Bloco 
   } 
   console.log(escopoFuncao); // Funcao 
   console.log(escopoBloco); // Error 
}
