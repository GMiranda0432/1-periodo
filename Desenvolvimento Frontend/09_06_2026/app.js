const CHAVE = 'contatos';

function lerContatos() {
    return JSON.parse(localStorage.getItem(CHAVE)) || [];

//Mini erro, eu apaguei o valor manualmente deixando como null, a chave existe mas o valor é null, então o JSON.parse(null) retorna null, o que impediu de adicionar novos contatos
// Ou seja, não deixe a chave contatos com valor null, undefined ou outro valor que ele não reconheça
}

function salvarContatos(lista) {
    localStorage.setItem(CHAVE, JSON.stringify(lista));
}

function criarContato(nome, telefone, email) {
    const contatos = lerContatos();
    const novoContato = {
        id: crypto.randomUUID(),
        nome,
        telefone,
        email
    };
    contatos.push(novoContato);
    salvarContatos(contatos);
    renderizarLista();
}

function renderizarLista() {
    const contatos = lerContatos();
    const container = document.getElementById('listaContatos');

    if (contatos.length === 0) {
        container.innerHTML = '<p class="vazio">Nenhum contato cadastrado.</p>';
        return;
    }

    container.innerHTML = contatos.map(c => `
        <div class="card-contato" data-id="${c.id}">
        <div class="info">
        <strong>${c.nome}</strong>
        <span>${c.telefone}</span>
        <span>${c.email}</span>
        </div>
        <div class="acoes">
        <button onclick="iniciarEdicao('${c.id}')"> Editar</button>
        <button onclick="deletarContato('${c.id}')"> Excluir</button>
        </div>
        </div>
        `).join('');
}

function iniciarEdicao(id) {
    const contatos = lerContatos();
    const contato = contatos.find(c => c.id === id);

    if (!contato) return;

    document.getElementById('inputId').value = contato.id;
    document.getElementById('inputNome').value = contato.nome;
    document.getElementById('inputTelefone').value = contato.telefone;
    document.getElementById('inputEmail').value = contato.email;

    document.getElementById('btnSalvar').textContent = 'Atualizar';
    document.getElementById('btnCancelar').classList.remove('oculto');
}

function atualizarContato(id, nome, telefone, email) {

    const contatos = lerContatos();
    const indice = contatos.findIndex(c => c.id === id);

    if (indice === -1) return;

    contatos[indice] = { id, nome, telefone, email };
    salvarContatos(contatos);
    renderizarLista();
}

function deletarContato(id) {
    if (!confirm('Deseja realmente excluir este contato?')) return;

    const contatos = lerContatos();
    const novaLista = contatos.filter(c => c.id !== id);

    salvarContatos(novaLista);
    renderizarLista();
}

const form = document.getElementById('formContato');
const btnCancelar = document.getElementById('btnCancelar');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('inputId').value;
    const nome = document.getElementById('inputNome').value.trim();
    const telefone = document.getElementById('inputTelefone').value.trim();
    const email = document.getElementById('inputEmail').value.trim();

    if (id) {
        atualizarContato(id, nome, telefone, email);
    } else {
        criarContato(nome, telefone, email);
    }
    limparFormulario();
});

function limparFormulario() {
    form.reset();
    document.getElementById('inputId').value = '';
    document.getElementById('btnSalvar').textContent = 'Adicionar';
    btnCancelar.classList.add('oculto');
}

btnCancelar.addEventListener('click', limparFormulario);

renderizarLista();