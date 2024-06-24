let contatos = [];
let indiceAtual = -1;

document.getElementById('incluir').addEventListener('click', incluirContato);
document.getElementById('editar').addEventListener('click', editarContato);
document.getElementById('salvar').addEventListener('click', salvarContato);
document.getElementById('cancelar').addEventListener('click', cancelarEdicao);
document.getElementById('excluir').addEventListener('click', excluirContato);

document.getElementById('primeiro').addEventListener('click', () => navegarContato('primeiro'));
document.getElementById('anterior').addEventListener('click', () => navegarContato('anterior'));
document.getElementById('proximo').addEventListener('click', () => navegarContato('proximo'));
document.getElementById('ultimo').addEventListener('click', () => navegarContato('ultimo'));

function incluirContato() {
    const contato = lerFormulario();
    contatos.push(contato);
    limparFormulario();
    alert('Contato incluído com sucesso!');
}

function editarContato() {
    if (indiceAtual >= 0) {
        const contato = contatos[indiceAtual];
        preencherFormulario(contato);
    } else {
        alert('Nenhum contato selecionado para edição!');
    }
}

function salvarContato() {
    if (indiceAtual >= 0) {
        contatos[indiceAtual] = lerFormulario();
        limparFormulario();
        alert('Contato salvo com sucesso!');
    } else {
        alert('Nenhum contato selecionado para salvar!');
    }
}

function cancelarEdicao() {
    limparFormulario();
}

function excluirContato() {
    if (indiceAtual >= 0) {
        contatos.splice(indiceAtual, 1);
        limparFormulario();
        alert('Contato excluído com sucesso!');
    } else {
        alert('Nenhum contato selecionado para excluir!');
    }
}

function navegarContato(direcao) {
    if (contatos.length === 0) {
        alert('Nenhum contato cadastrado!');
        return;
    }

    if (direcao === 'primeiro') {
        indiceAtual = 0;
    } else if (direcao === 'anterior') {
        if (indiceAtual > 0) {
            indiceAtual--;
        }
    } else if (direcao === 'proximo') {
        if (indiceAtual < contatos.length - 1) {
            indiceAtual++;
        }
    } else if (direcao === 'ultimo') {
        indiceAtual = contatos.length - 1;
    }

    preencherFormulario(contatos[indiceAtual]);
}

function lerFormulario() {
    return {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        endereco: document.getElementById('endereco').value,
        telefone: document.getElementById('telefone').value
    };
}

function preencherFormulario(contato) {
    document.getElementById('nome').value = contato.nome;
    document.getElementById('sobrenome').value = contato.sobrenome;
    document.getElementById('endereco').value = contato.endereco;
    document.getElementById('telefone').value = contato.telefone;
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('telefone').value = '';
    indiceAtual = -1;
}
