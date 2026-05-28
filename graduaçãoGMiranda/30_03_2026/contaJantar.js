//Primeiro passo: Criar referências para os elementos do Html
const inValorConta = document.getElementById("inValorConta");
const btTotalizar = document.getElementById("btTotalizar");
const outTotalConta = document.getElementById("outTotalConta");

//Segundo passo: Habilitar evento e acionar function
btTotalizar.addEventListener("click", totalizarConta);
function totalizarConta(){
    var valorConta = Number(inValorConta.value);
    var txGarcom = valorConta * 0.1;
    var totalConta = valorConta + txGarcom;

    outTotalConta.innerHTML= "Taxa Garçom = R$" + txGarcom.toFixed(2) +
                             "<br>Total a Pagar = R$" + totalConta.toFixed(2);
}
