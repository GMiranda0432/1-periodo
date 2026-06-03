const inputNotas = document.getElementById("InNotas");
const btAdicionar = document.getElementById("btAdicionar");
const btMedia = document.getElementById("btMedia");
const listaNotasEl = document.getElementById("listaNotas");
const btMostrar = document.getElementById("btMostrar");

var Notas = [];

function updateList() {
    listaNotasEl.innerHTML = '';
    Notas.forEach((n, i) => {
        const li = document.createElement('li');
        li.textContent = `#${i + 1}: ${n}`;
        listaNotasEl.appendChild(li);
    });
}

function adicionarNota() {
    var nota = parseFloat(inputNotas.value);
    if (!isNaN(nota) && nota >= 0 && nota <= 100) {
        Notas.push(nota);
        inputNotas.value = "";
        updateList();
    } else {
        alert('Digite uma nota válida entre 0 e 100 para funcionar.');
    }
}

function verMedia() {
    if (Notas.length > 0) {
        const soma = Notas.reduce((acc, val) => acc + val, 0);
        const media = soma / Notas.length;
        alert(`A média das notas é: ${media.toFixed(2)}`);
    } else {
        alert("Nenhuma nota foi adicionada.");
    }
}

btAdicionar.addEventListener('click', adicionarNota);
btMedia.addEventListener('click', verMedia);