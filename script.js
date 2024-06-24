document.addEventListener('DOMContentLoaded', function() {
    const btnEntrar = document.getElementById('entrar');
    const inputUsuario = document.getElementById('usuario');
    const inputSenha = document.getElementById('senha');

    btnEntrar.addEventListener('click', function() {
        const usuario = inputUsuario.value;
        const senha = inputSenha.value;

        if (usuario === 'admin' && senha === 'admin') {
            window.location.href = 'cadastros.html';
        } else {
            inputUsuario.value = '';
            inputSenha.value = '';
            inputUsuario.placeholder = 'Usuário incorreto';
            inputSenha.placeholder = 'Senha incorreta';
            inputUsuario.classList.add('error');
            inputSenha.classList.add('error');
        }
    });

    inputUsuario.addEventListener('focus', function() {
        inputUsuario.placeholder = 'USUARIO';
        inputUsuario.classList.remove('error');
    });

    inputSenha.addEventListener('focus', function() {
        inputSenha.placeholder = 'SENHA';
        inputSenha.classList.remove('error');
    });
});
