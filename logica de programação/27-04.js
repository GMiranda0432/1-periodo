//criando referência para os elementos manipulados pela function
var inNome = document.getElementById("inNome");
var rbPar = document.getElementById("rbPar");
var rbImpar = document.getElementById("rbImpar");
var outNumero = document.getElementById("outNumero");
var outResultado = document.getElementById("outResultado");
var outPontuação = document.getElementById("outPontuação");
var outPorcentagemAcertos = document.getElementById("outPorcentagemAcertos");
var outClicks = document.getElementById("outClicks");
var btJogar = document.getElementById("btJogar");
var pontos = 0;
var nomeAnterior = "";
var clicks = 0;
var comboWin=0;
var comboLost=0;
function jogarParImpar() {

    var nome = inNome.value;
    var par = rbPar.checked;
    var impar = rbImpar.checked;


    if (nome == "") {
        alert("Nome não preenchido");
        inNome.focus();
    } else if (par == false && impar == false) {
        alert("Selecione Par ou Ímpar");
    } else {

        const menorValor = 1;
        const maiorValor = 100;
        var numAleatorio = Math.floor(Math.random() * (maiorValor - menorValor + 1) + menorValor);
        var resultado = (numAleatorio % 2 == 0) ? "Par" : "Ímpar";

        outNumeroGerado.textContent = "Número Gerado => " + numAleatorio;

        if ((par && resultado == "Par") || (impar && resultado == "Ímpar")) {
            outResultadoJogo.textContent = "Parabéns " + nome + " você ganhou +1 ponto!";
            outResultadoJogo.style.color = "green";
            pontos++;
            comboWin++;
            comboLost=0;
            if (comboWin > 7) {
                outResultadoJogo.textContent = "Jackpot, seus pontos vão dobrar até você perder!";
                pontos *= 2;
            }
        } else {
            outResultadoJogo.textContent = "Ops " + nome + " você perdeu! -1 ponto para você.";
            outResultadoJogo.style.color = "red";
            pontos--;
            comboLost++;
            comboWin=0;
            pontos = (pontos < 0) ? 0 : pontos;
            if (comboLost > 7) {
                outResultadoJogo.textContent = "Losing Streak! Seus pontos serão divididos até você ganhar!";
                pontos = Math.floor(pontos / 2);
            }
        }
        outPontuação.textContent = "Pontuação: " + pontos
        outClicks.textContent = "Número de Jogadas: " + ++clicks
        outPorcentagemAcertos.textContent = "Porcentagem de Acertos: " + (pontos / clicks * 100).toFixed(2) + "%"
        nomeAnterior = nome;
    }
}
btJogar.addEventListener("click", jogarParImpar);