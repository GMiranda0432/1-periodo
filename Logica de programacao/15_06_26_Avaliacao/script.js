const inNome = document.getElementById("inNome");
const inCargo = document.getElementById("inCargo");
const inSalario = document.getElementById("inSalario");
const inSexo = document.getElementById("inSexo");
const btRegistro = document.getElementById("btRegistro");
const btConsult = document.getElementById("btConsult");
const btVendedor = document.getElementById("btVendedor");
const btMedia = document.getElementById("btMedia");
const outRegistro = document.getElementById("outRegistro")
const outConsult = document.getElementById("outConsult")
const outVendedor = document.getElementById("outVendedor")
const outMedia = document.getElementById("outMedia")


var vetDados = []

btRegistro.addEventListener("click", REGISTRAR);
function REGISTRAR() {
    var dadoNome = inNome.value
    var dadoSexo = inSexo.value
    var dadoCargo = inCargo.value
    var dadoSalario = inSalario.value

    if (inNome.value == "") {
        alert("Por favor, digite seu nome");
        inNome.focus();
    }
    if (inCargo.value == "") {
        alert("Por favor, escolha uma opção");
        inCargo.focus();
    }
    if (inSexo.value == "") {
        alert("Por favor, escolha uma opção");
        inSexo.focus();
    }
    if (inSalario.value <= 0) {
        alert("Por favor, Digite seu salário como um valor maior que zero");
        inSalario.focus();
    }
    vetDados.push({ nome: dadoNome, salario: dadoSalario, sexo: dadoSexo, cargo: dadoCargo });
    outRegistro.innerHTML = "Dados do(a) Colaborador(a) foram registrados!"
}

btConsult.addEventListener("click", CONSULTAR);
function CONSULTAR() {
    for (let ind = 0; ind < vetDados.length; ind++) {
        if (inNome.value == vetDados[ind].nome)(
            outConsult.innerHTML = "Dados: Nome =>" + vetDados[ind].nome + "Salario =>" + vetDados[ind].salario = "Sexo =>" + vetDados[ind].sexo + "Cargo =>"+ vetDados[ind].cargo)
}

btVendedor.addEventListener("click", FILTRAR);
function FILTRAR() {

    outVendedor.innerHTML = "Dados Filtrados";
}

btMedia.addEventListener("click", CALCULAR);
function CALCULAR() {

    outMedia.innerHTML = "Média";}