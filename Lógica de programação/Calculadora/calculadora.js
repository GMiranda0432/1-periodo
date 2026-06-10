const operacaoElement = document.getElementById('operacao');
const operando1Element = document.getElementById('operando1');
const operando2Element = document.getElementById('operando2');
const outputElement = document.getElementById('output');
const calcularButton = document.getElementById('calcular');
const limparButton = document.getElementById('limpar');

function limparCampos() {
    operando1Element.value = '';
    operando2Element.value = '';
    operacaoElement.value = '+';
    outputElement.textContent = '';
}

function exibirResultado(mensagem) {
    outputElement.textContent = mensagem;
}

function calcular() {
    const operacao = operacaoElement.value;
    const valor1 = parseFloat(operando1Element.value);
    const valor2 = parseFloat(operando2Element.value);

    if (operacao === 'SQRT') {
        if (operando1Element.value.trim() === '' || Number.isNaN(valor1)) {
            alert('Informe um valor numérico válido para o Operando 1.');
            return;
        }
        if (valor1 < 0) {
            exibirResultado('ERRO... Raiz Quadrada de valor negativo não é um número Real!');
            return;
        }

        const resultado = Math.sqrt(valor1);
        exibirResultado(`SQRT(${valor1}) = ${resultado}`);
        return;
    }

    if (operando1Element.value.trim() === '' || Number.isNaN(valor1) || operando2Element.value.trim() === '' || Number.isNaN(valor2)) {
        alert('Informe valores numéricos válidos para Operando 1 e Operando 2.');
        return;
    }

    let resultado;
    let mensagem;

    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            mensagem = `${valor1} + ${valor2} = ${resultado}`;
            break;
        case '-':
            resultado = valor1 - valor2;
            mensagem = `${valor1} - ${valor2} = ${resultado}`;
            break;
        case '*':
            resultado = valor1 * valor2;
            mensagem = `${valor1} * ${valor2} = ${resultado}`;
            break;
        case '/':
            if (valor2 === 0) {
                exibirResultado('ERRO... Divisão por ZERO impossível!');
                return;
            }
            resultado = valor1 / valor2;
            mensagem = `${valor1} / ${valor2} = ${resultado}`;
            break;
        case '^':
            resultado = Math.pow(valor1, valor2);
            mensagem = `${valor1} ^ ${valor2} = ${resultado}`;
            break;
        default:
            alert('Erro na operação.');
            return;
    }

    exibirResultado(mensagem);
}

calcularButton.addEventListener('click', calcular);
limparButton.addEventListener('click', limparCampos);
