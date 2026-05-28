/*Primeiro passo é criar as referências para os
  elementos do documento Html que preciso manipular
*/
const inRaio = document.getElementById("inRaio");
const btCalcular = document.getElementById("btCalcular");
const outMedidas = document.getElementById("outMedidas");

/*Segundo passo é habilitar a escuta aos eventos e
  acionar as functions
*/
btCalcular.addEventListener("click", calcularMedidas);

function calcularMedidas() {
    var raio = Number(inRaio.value);

    var circunf = 2 * Math.PI * raio;
    var area = Math.PI * (raio ** 2); //equivale a raio * raio
    
    outMedidas.innerHTML = "Circunferência = " + circunf.toFixed(2) +
                           "<br>Área = " + area.toFixed(2);
}




