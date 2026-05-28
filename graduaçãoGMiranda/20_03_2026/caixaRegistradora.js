const inPreco = document.getElementById("inPreco");
const inQuantidade = document.getElementById("inQuantidade");
const btRegistrar = document.getElementById("btRegistrar");
const btReiniciar = document.getElementById("btReiniciar");
const outTotal = document.getElementById("outTotal");

var total = 0; // Variável Acumuladora: escopo global para somar os valores de cada produto

btRegistrar.addEventListener("click", registrarProduto);
function registrarProduto() {
    var preco = Number(inPreco.value);
    var quantidade = Number(inQuantidade.value);

    total = total + (preco * quantidade);
    outTotal.textContent = "Total: R$" + total.toFixed(2);
    inPreco.focus();
}

btReiniciar.addEventListener("click", reiniciar);
function reiniciar() {
    total = 0;
    inPreco.value = "";
    inPreco.focus(); // Coloca o cursor no campo inPreco para facilitar a digitação do próximo produto
    inQuantidade.value = "";
    outTotal.textContent = "Total: R$0.00";
}