var precotxt = document.getElementById('preco');
var porcentagemtxt = document.getElementById('personalizada');
var taxatxt = document.getElementById('taxa');
var totaltxt = document.getElementById('total');

function adicionar(n) {
    porcentagemtxt.value = n;
}

function calcular() {
    var precot = String(precotxt.value);
    var porcentagemt = String(porcentagemtxt.value);
    if (precot.length > 0 && porcentagemt.length > 0){
        let preco = Number(precot);
        let porcentagem = Number(porcentagemt);
        let taxa = preco * porcentagem / 100;
        let total = taxa + preco;
        taxatxt.innerHTML = taxa.toFixed(2);
        totaltxt.innerHTML = total.toFixed(2);
    } else {
        alert('Adicione os valores.');
    }
}
