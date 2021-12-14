var fundo = document.getElementById('fundo');
var placar = document.getElementById('pontuacao');
var personagem = document.getElementById('personagem');


window.addEventListener("keydown", moverPersonagem);
var cron;
var miliseg = 0;
var posicao = 0;
var posicaoX = 20;
var posicaoY = 20;
var eixoX = 0;
var eixoY = 0;
var ponto = document.createElement('div');
var pontuacao = 0;

///////////////////////////////////////////////////////////////////////////////

function moverPersonagem(key){
    contar();
    function contar(){
        pause();
        cron = setInterval(() => { timer(); }, 10);
    }
    function timer(){
        miliseg++;
        if (miliseg == 5){
            miliseg = 0;
            if (key.keyCode == '39'){
                posicaoX += 10;
                if (posicaoX > 400){ //caso passe do lado direito ele volta pra esquerda
                    posicaoX = 10;
                } 
                personagem.style.left = `${posicaoX}px`; // vai pra direita
            } else if (key.keyCode == "37"){
                posicaoX -= 10;
                if (posicaoX < 10){ //caso passe do lado esquerdo ele volta pra direita
                    posicaoX = 400;
                }
                personagem.style.left = `${posicaoX}px`; //vai pra esquerda
            } else if (key.keyCode == "38"){
                posicaoY -= 10;
                if (posicaoY < 10){//caso passe de cima ele vai pra baixo
                    posicaoY = 400
                }
                personagem.style.top = `${posicaoY}px`; //vai pra cima
            } else if (key.keyCode == "40"){
                posicaoY += 10;
                if (posicaoY > 400){//caso passe de baixo ele vai pra cima
                    posicaoY = 10
                }
                personagem.style.top = `${posicaoY}px`; // vai pra baixo
            }
            
            if (posicaoX == eixoX*10 && posicaoY == eixoY*10) {
                pontuacao++;
                placar.innerText = pontuacao;
                criarPonto();
            }
            
        }
    }
}



function pause(){ //pausa a contagem
    clearInterval(cron);
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

