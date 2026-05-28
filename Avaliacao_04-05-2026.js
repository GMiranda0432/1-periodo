const inTime = document.getElementById("inTime");
const inDist = document.getElementById("inDist");
const btRegister = document.getElementById("btRegister");
const btRelatorio = document.getElementById("btRelatorio");
const outRegister = document.getElementById("outRegister");
const outRelatorio = document.getElementById("outRelatorio");

var trechos = 0
var trechosTotal = 0
var demora2H = 0
var VM100Maior = 0

btRegister.addEventListener("click", registro);
function registro() {

    var distancia = Number(inDist.value);
    var tempo = Number(inTime.value);
    var VM = distancia / tempo;

    if (distancia <= "0") {
        alert("A distância não pode ser menor e nem igual a zero, a não ser que saiba teletransporte, aplique um número positivo sem ser zero");
        inDist.focus();
    } else if (tempo <= "0") { 
        alert("O tempo não pode ser zero menor e nem igual a zero, a não ser que saiba viagem temporal, aplique um número positivo sem ser zero");
        inDist.focus();
    } else {
        outRegister.innerHTML = "Velocidade Média do trecho especifico: " + VM + "Km/H";
    }
    trechosTotal = trechosTotal + distancia;
    trechos++;
    if (tempo >= "2") {
        demora2H++;
    }
    if (VM >= "100") {
        VM100Maior++;
    }

}

btRelatorio.addEventListener("click", relato);
function relato() {
    outRelatorio.innerHTML = "A Distância total de todo o enduro foi: " + trechosTotal + "Km" +
        "<br> trechos que demoraram mais que 2 horas: " + demora2H +
        "<br> trechos com velocidade média superior a 100Km/H: " + VM100Maior +
        "<br> Média das distâncias dos trechos do enduro: " + trechosTotal / trechos;
}