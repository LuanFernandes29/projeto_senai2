let listaDeNumerosSorteados = [];
let numerosJogadas = 9;
let numeroSecreto = gerarNumeroSecreto();
let tentativa = 0;


function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial(){
    exibirTextoNaTela("h1","Jogo do numero secreto");
    exibirTextoNaTela("p",`Insira, de 1 a ${numerosJogadas}, para acertar o número secreto`);
}

exibirTextoInicial()
function validarChute(){
    let chute = parseInt(document.querySelector("input").value);
    tentativa++;
    let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
    if (chute == ""){
        alert("Por favor, preencha o campo")
    }
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1","Parabéns!");
        exibirTextoNaTela("p",`Você acertou o número com ${tentativa} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }
    else{
        if (chute < numeroSecreto) {
            exibirTextoNaTela("h1",`O número secreto é maior que ${chute}`);
        } else {
            exibirTextoNaTela("h1", `O número secreto é menor que ${chute}`);
        }
    }
   limparCampo();
}

function gerarNumeroSecreto() {
     let numEscolhido = parseInt(Math.random()*numerosJogadas+1);
     let quantidadeNumerosDaLista = listaDeNumerosSorteados.length;
     if(quantidadeNumerosDaLista == numerosJogadas){
        listaDeNumerosSorteados = [];
     }
     if(listaDeNumerosSorteados.includes(numEscolhido)){
       return gerarNumeroSecreto();
     }
     else{
        listaDeNumerosSorteados.push(numEscolhido);
        return numEscolhido
     }
}
function limparCampo(){
    chute = document.querySelector(`input`);
    chute.value = "";
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    tentativa = 0;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
    alterarImagem('imagem', './img/ia.png')
}
function alterarImagem(objeto, caminhoImagem) {
    document.getElementById(objeto).src = caminhoImagem;
}document.addEventListener('keydown', function(event){
    // keydown é um evento que vê se alguma tecla foi acionada
    // sempre que uma tecla é acionada chama a function
    let tecla = event.key;
    if(tecla>=0 && tecla <=9){
        chute = document.querySelector("input").value = tecla;
    }
    else if(tecla === "Enter"){
        validarChute()
    }
    else if(tecla === 'Backspace'){
        chute = document.querySelector("input").value = ""
    }
});