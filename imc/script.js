var peso = document.getElementById('peso')
var altura = document.getElementById('altura')
var res = document.getElementById('res')
var sit = document.getElementById('sit')
function preenchido(p, a){
    let pS = String(p.value)
    let aS = String(a.value) 
    if (pS.length > 0 && aS.length > 0){
        return true
    }
}
function calcular(){
    if (preenchido(peso, altura)){
        let p = Number(peso.value)
        let a = Number(altura.value)
        let imc = (p / (a / 100)**2)
        res.innerHTML = `Seu IMC é: ${imc.toFixed(2)} \n`
        if (imc <= 18.5){
            //'magreza'
            sit.innerText = 'Magreza'
            sit.style.color = 'red'
        } else if (imc <= 24.9){
            //'normal'
            sit.innerText = 'Normal'
            sit.style.color = 'green'
        } else if (imc <= 29.9) {
            //'sobrepeso'
            sit.innerText = 'Sobrepeso'
            sit.style.color = 'yellow'
        } else if(imc <= 39,9) {
            //'obesidade'
            sit.innerText = 'Obesidade'
            sit.style.color = 'orange'
        } else if (imc >= 40) {
            //'obesidade grave'
            sit.innerText = 'Obesidade grave'
            sit.style.color = 'red'
        } else {
            alert('wtf?? kkkjjk')
        }
    } else {
        alert('Peencha os campos.')
    }
}