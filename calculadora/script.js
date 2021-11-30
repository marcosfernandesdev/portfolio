var visor = document.getElementById('visor')
function limpar(){
    visor.innerText = ''
}

function isNumber(n){
    if (n >= 0 && n < 9){
        return true
    } else{
        return false
    }
}

var ultimo;
function repetido(n){
    //let tela = (visor.innerHTML)
    if (!isNumber(n)){
        if(n == ultimo || !isNumber(ultimo) ) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
} 

function adicionar(num) {
    if (!repetido(num)){
        if (isNumber(num)){
            visor.innerHTML += `${Number(num)}`
        } else if (!repetido(num)) {
            visor.innerHTML += num
        }
        ultimo = num
    } else if(repetido(num)){
        return false
    } else{
        return false
    }
}

function apagar() {
    let tela = (visor.innerHTML)
    visor.innerHTML = tela.slice(0, -1)
    ultimo = 1
}

function resultado(){
    let tela1 = (visor.innerHTML)
    if (tela1.length != 0) {
        visor.innerHTML = Math.round(eval(tela1))
    }
}

/** 
function diminuirFonte() {
    if (visor.length >= 20){
        visor.style.cssText = 'font-size: 15pt;';
    } else if(visor.length >= 30) {
        visor.style.cssText = 'font-size: 10pt;';
    }
    visor.style.cssText = 'font-size: 20pt;';
}
*/