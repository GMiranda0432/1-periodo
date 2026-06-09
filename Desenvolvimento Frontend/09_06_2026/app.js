const inputNome = document.getElementById('inputNome');
const selectTema = document.getElementById('selectTema');
const mensagem = document.getElementById('mensagem');
const btnSalvar = document.getElementById('btnSalvar');

function carregarPreferencias() {
    const prefs = JSON.parse(localStorage.getItem('preferencias')) || {};
    if (prefs.nome) inputNome.value = prefs.nome;
    if (prefs.tema) selectTema.value = prefs.tema;
    aplicarTema(prefs.tema || 'claro');
}

function aplicarTema(tema) {
    document.body.className = tema === 'escuro' ? 'tema-escuro' : '';
}

btnSalvar.addEventListener('click', () => {
    const prefs = {
        nome: inputNome.value.trim(),
        tema: selectTema.value
    };
    localStorage.setItem('preferencias', JSON.stringify(prefs));
    aplicarTema(prefs.tema);
    mensagem.textContent = `Preferências de "${prefs.nome}" salvas!`;
});

carregarPreferencias();