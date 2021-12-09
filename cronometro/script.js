var hora = document.getElementById('hora');
var min = document.getElementById('min');
var seg = document.getElementById('seg');
var milis = document.getElementById('milis');
var comeca = document.getElementById('comeca');
var pausa = document.getElementById('pausa');
var reseta = document.getElementById('reseta');
///////////////////////////////////////////////////////////
var hour = 0;
var minute = 0;
var second = 0;
var milisec = 0;
var cron;
//////////////////////////////////////////////////////

comeca.addEventListener('click', start);
pausa.addEventListener('click', pause);
reseta.addEventListener('click', reset);

function start(){ //começa a contar
    pause();
    cron = setInterval(() => { timer(); }, 10);
}
function timer(){
    milisec++;
    if (milisec == 100) { //se chegar a 100ms aumenta 1s
    milisec = 0;
    second++;
    } if (second == 60){ // se chegar a 60s aumenta 1min
        second = 0;
        minute++;
    } if (minute == 60) { // se chegar a 60min aumenta 1h
        minute = 0;
        hour++;
    }


    if (hour > 0){ //só mostra as horas se tiver 1 hora
        hora.innerText = `${hour}:`;
    }
    
    min.innerText = alinhar(minute);
    seg.innerText = alinhar(second);
    milis.innerText = alinhar(milisec);
}
function alinhar(n) {
    return n < 10 ?  `0${n}` : n 
}

function pause(){ //pausa a contagem
    clearInterval(cron);
}

function reset(){ //zera a contagem
    pause();
    hour = 0;
    minute = 0;
    second = 0;
    milisec = 0;
    min.innerText = '00';
    seg.innerText = '00';
    milis.innerText = '000';
}