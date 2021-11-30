var a = document.getElementById('a')
var b = document.getElementById('b');
var c = document.getElementById('c');
var formu = document.getElementById('formula')
var res = document.getElementById('resultado');
a.focus();

function calcular(){
    a = Number(a.value);
    b = Number(b.value);
    c = Number(c.value);
    
    let delta = 0;
    delta = b**2 - (4*a*c);
    let raiz_delta = Math.sqrt(delta);

    let x1 = (-b + raiz_delta) / (2*a);
    let x2 = (-b - raiz_delta) / (2*a);

    formu.innerHTML = -b + '±' + '√' + raiz_delta + '<br> <hr>' + 2*a;
    res.innerHTML += '<br><br>X1=  '+ x1 + '<br> X2=  ' + x2;
}

