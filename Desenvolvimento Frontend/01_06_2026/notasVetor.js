const inputNotas = document.getElementById("InNotas");
const btAdicionar = document.getElementById("btAdicionar");
const btMedia = document.getElementById("btMedia");
const listaNotasEl = document.getElementById("listaNotas");

let Notas = [];

function updateList() {
    listaNotasEl.innerHTML = '';
    Notas.forEach((n, i) => {
        const li = document.createElement('li');
        li.textContent = `#${i + 1}: ${n}`;
        listaNotasEl.appendChild(li);
    });
}

function adicionarNota() {
    const nota = parseFloat(inputNotas.value);
    if (!isNaN(nota)) {
        Notas.push(nota);
        inputNotas.value = "";
        updateList();
    } else {
        alert('Digite uma nota válida antes de adicionar.');
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
