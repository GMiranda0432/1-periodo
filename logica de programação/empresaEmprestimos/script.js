const InEmprestimo = document.getElementById("InEmprestimo");
const btnCalcular = document.getElementById("BtnCalcular");
const OutResultado = document.getElementById("OutResultado");

btnCalcular.addEventListener("click", JurosSimples30Parcelas);

function JurosSimples30Parcelas() {
    const principal = parseFloat(InEmprestimo.value);
    if (isNaN(principal) || principal <= 0) {
        alert("Digite o valor do empréstimo sendo maior que 0");
        InEmprestimo.focus();
        return;
    }
    let resultado = "Quant. de Parcelas || Valor da Dívida || Valor Juros || Valor das Parcelas<hr>";
    let taxaBase = 5;
    for (let parcela = 3; parcela <= 30; parcela += 3) {
        let taxaAtual = taxaBase * (parcela / 3);
        let valorJuros = principal * (taxaAtual / 100);
        let valorDivida = principal + valorJuros;
        let valorParcela = valorDivida / parcela;
        resultado += `${parcela.toString().padEnd(5)} || R$ ${valorDivida.toFixed(2)} || R$ ${valorJuros.toFixed(2)} || R$ ${valorParcela.toFixed(2)}<hr>`;
    }
    OutResultado.innerHTML = `<pre>${resultado}</pre>`;
}