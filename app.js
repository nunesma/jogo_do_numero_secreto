let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('tag', 'Jogo do Número Secreto');
exibirTextoNaTela('h1', 'Escolha um Número Entre 1 e 10');

function verificarChute(){
    console.log(numeroSecreto);
} 

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}