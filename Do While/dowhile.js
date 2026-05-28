btFatorial.addEventListener('click', calcularFatorial);

function calcularFatorial() {
    var numero=Number(n.value);
    if(n.value =="" || numero < 0){
        alert("Campo número deve ser um inteiro maior ou igual a zero");
        n.focus();
    }else if (numero >= 0){
        var fatorial = numero;
        var increm = 0;

        while(increm < numero-1){
            increm++
            fatorial *= numero - increm;
        }
    } else {
        fatorial = 1;
    }
    res.innerHTML = `O fatorial de ${numero} é ${fatorial}`;
}