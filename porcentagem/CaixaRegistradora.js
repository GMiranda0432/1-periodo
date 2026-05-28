const btnCalcular = document.getElementById('btn-calcular');
const btnLimpar = document.getElementById('btn-limpar');
const preçoUnitarioInput = document.getElementById('preço-unitario');
const quantidadeInput = document.getElementById('quantidade');
const adicionarDiv = document.getElementById('adicionar');
const totalSpan = document.getElementById('total');
let total = 0;

btnCalcular.addEventListener('click', () => {
    const preçoUnitario = parseFloat(preçoUnitarioInput.value);
    const quantidade = parseInt(quantidadeInput.value);
    if (!isNaN(preçoUnitario) && !isNaN(quantidade)) {
        total += preçoUnitario * quantidade;
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `Item: ${quantidade} x R$${preçoUnitario.toFixed(2)} = R$${(preçoUnitario * quantidade).toFixed(2)}`;
        adicionarDiv.appendChild(itemDiv);
    }
});

btnLimpar.addEventListener('click', () => {
    total = 0;
    adicionarDiv.innerHTML = '';
});
setInterval(() => {
    totalSpan.textContent = `R$${total.toFixed(2)}`;
}, 100);