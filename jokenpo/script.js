var pontosJogador = document.getElementById('pontosJogador');
var pontosMaquina = document.getElementById('pontosMaquina');
var escolhaDoJogador = document.getElementById('escolhaDoJogador');
var escolhaDaMaquina = document.getElementById('escolhaDaMaquina');
var stat = document.getElementById('status');
var pontoJ = 0;
var pontoM = 0;
var pe = 'pe';
var pa = 'pa';
var te = 'te';

//alert('Você tem 3 opções e irá jogar contra a máquina. Ao atingir 10 pontos será reiniciado.')
function zerar() { //vai zerar os pontos e limpar os campos 
    pontoJ = 0;
    pontoM = 0;
    pontosJogador.innerText = pontoJ;
    pontosMaquina.innerText = pontoM;
    stat.innerHTML = '';
    escolhaDoJogador.innerHTML = '';
    escolhaDaMaquina.innerHTML = '';
}

function adicionarFoto(e) { //vai retornar os icones de cada jogada
    const fotos = ['https://cdn-icons-png.flaticon.com/512/1828/1828186.png', 
    'https://cdn-icons-png.flaticon.com/128/1692/1692912.png', 
    'https://cdn-icons-png.flaticon.com/512/2617/2617721.png'];
    
    if (e == 1){
        return fotos[0];
    } else if (e == 2){
        return fotos[1];
    } else if (e == 3){
        return fotos[2];
    }
}

function jogar(s,n){
    escolhaDoJogador.innerHTML = '';
    escolhaDaMaquina.innerHTML = '';
    var imgj = document.createElement('img');
    var imgm = document.createElement('img');
    //código que tava no MDN
    let min = Math.ceil(1);
    let max = Math.floor(4);
    let i = Math.floor(Math.random() * (max - min)) + min;
    //----------------------------
    if (i == 1 && s == te){ //pedra ganhando da tesoura
        pontoM++;
        stat.innerHTML = 'Perdeu!';
    } else if (i == 2 && s == pe){ // papel ganhando da pedra 
        pontoM++;
        stat.innerHTML = 'Perdeu!';
    } else if (i == 3  && s == pa){ //tesoura ganhando do papel
        pontoM++;
        stat.innerHTML = 'Perdeu!';
    } else if(i == n){
        stat.innerHTML = 'Empate!';
    } else {
        pontoJ++; //se não foi nenhum dos de cima então o jogador ganhou
        stat.innerHTML = 'Ganhou!';
    }
    pontosJogador.innerText = pontoJ;
    pontosMaquina.innerText = pontoM;
    imgm.src = adicionarFoto(i);
    escolhaDaMaquina.appendChild(imgm);
    imgj.src = adicionarFoto(n);
    escolhaDoJogador.appendChild(imgj);

    if (pontoJ == 10 || pontoM == 10){ //zerar se atingir 10pontos
        if (pontoJ == 10){
            alert('Você ganhou!');
        } else {
            alert('Você perdeu!');
        }
        zerar()
    }

    //colocar cores no status
    if (stat.innerHTML === 'Ganhou!'){ 
        stat.style.color = 'green';
    } else if (stat.innerHTML === 'Perdeu!'){
        stat.style.color = 'red';
    } else if (stat.innerHTML === 'Empate!'){
        stat.style.color = 'white';
    }

    //colocar cor no placar
    if (pontoJ > pontoM){ //quando jogador estiver ganhando
        pontosJogador.style.color = 'green'; 
        pontosMaquina.style.color = 'red';
    } else if (pontoJ == pontoM){ //quando tiver empate
        pontosJogador.style.color = 'black';
        pontosMaquina.style.color = 'black';
    } else { //quando a máquina estiver ganhando
        pontosJogador.style.color = 'red';
        pontosMaquina.style.color = 'green';
    }
    
}


