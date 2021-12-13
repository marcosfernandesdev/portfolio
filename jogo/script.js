var fundo = document.getElementById('fundo');
var placar = document.getElementById('pontuacao');
var personagem = document.getElementById('personagem');


window.addEventListener("keydown", moverPersonagem);
var posicaoX = 0;
var posicaoY = 0;
var eixoX = 0;
var eixoY = 0;
var ponto = document.createElement('div');
var pontuacao = 0;

///////////////////////////////////////////////////////////////////////////////

function moverPersonagem(key){
    if (key.keyCode == '39'){
        posicaoX += 10;
        personagem.style.left = `${posicaoX}px`; // vai pra direita
    } else if (key.keyCode == "37"){
        posicaoX -= 10;
        personagem.style.left = `${posicaoX}px`; //vai pra esquerda
    } else if (key.keyCode == "38"){ 
        posicaoY -= 10;
        personagem.style.top = `${posicaoY}px`; //vai pra cima
    } else if (key.keyCode == "40"){ 
        posicaoY += 10;
        personagem.style.top = `${posicaoY}px`; // vai pra baixo
    }

    if (posicaoX == eixoX*10 && posicaoY == eixoY*10) {
        pontuacao++;
        placar.innerText = pontuacao;
        criarPonto();
    }
}

function criarPonto(){
    ponto.remove();
    let minX = Math.ceil(2);
    let maxX = Math.floor(39);
    eixoX = Math.ceil(Math.floor(Math.random() * (maxX - minX)) + minX);
    
    let minY = Math.ceil(2);
    let maxY = Math.floor(39);
    eixoY = Math.ceil(Math.floor(Math.random() * (maxY - minY)) + minY); 
    
    ponto.id = 'ponto';
    ponto.style.top = `${eixoY*10-10}px`;
    ponto.style.left = `${eixoX*10}px`;
    fundo.appendChild(ponto);
}

