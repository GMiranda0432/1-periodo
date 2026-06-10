// Referências aos elementos do HTML
const trabalhadorJovens = document.getElementById('trabalhadores-jovens');
const trabalhadorAdultos = document.getElementById('trabalhadores-adultos');
const trabalhadorIdosos = document.getElementById('trabalhadores-idosos');
const botaoCalcular = document.getElementById('btn-calcular');
const resultadoDiv = document.getElementById('resultado');
const conteudoResultado = document.getElementById('conteudo-resultado');
const erroDiv = document.getElementById('erro');

// Adiciona um listener para o clique no botão
botaoCalcular.addEventListener('click', calcularPercentuais);

/**
 * Função que calcula os percentuais de trabalhadores por faixa etária
 */
function calcularPercentuais() {
    // Lê os valores dos campos de entrada
    const jovens = parseFloat(trabalhadorJovens.value) || 0;
    const adultos = parseFloat(trabalhadorAdultos.value) || 0;
    const idosos = parseFloat(trabalhadorIdosos.value) || 0;

    // Calcula o total de trabalhadores
    const total = jovens + adultos + idosos;

    // Limpa mensagens de erro anteriores
    erroDiv.classList.remove('mostrar');
    erroDiv.textContent = '';

    // Valida se o total é zero
    if (total === 0) {
        erroDiv.textContent = 'Erro: Informe pelo menos um trabalhador em alguma faixa etária.';
        erroDiv.classList.add('mostrar');
        resultadoDiv.classList.remove('mostrar');
        return;
    }

    // Calcula os percentuais
    const percentualJovens = (jovens / total) * 100;
    const percentualAdultos = (adultos / total) * 100;
    const percentualIdosos = (idosos / total) * 100;

    // Monta o conteúdo do resultado
    conteudoResultado.innerHTML = `
        <div class="resultado-item">
            <strong>Trabalhadores Jovens:</strong> ${jovens} (<span class="percentual">${percentualJovens.toFixed(2)}%</span>)
        </div>
        <div class="resultado-item">
            <strong>Trabalhadores Adultos:</strong> ${adultos} (<span class="percentual">${percentualAdultos.toFixed(2)}%</span>)
        </div>
        <div class="resultado-item">
            <strong>Trabalhadores Idosos:</strong> ${idosos} (<span class="percentual">${percentualIdosos.toFixed(2)}%</span>)
        </div>
        <div class="resultado-item">
            <strong>Total de Trabalhadores:</strong> ${total}
        </div>
    `;

    // Exibe o elemento de resultado
    resultadoDiv.classList.add('mostrar');
}
