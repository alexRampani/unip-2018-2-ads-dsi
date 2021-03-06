const txtNome = document.getElementById('txtNome');
const txtEmail = document.getElementById('txtEmail');
const txtSenha = document.getElementById('txtSenha');
const txtConfirmarSenha = document.getElementById('txtConfirmarSenha');
const txtEndereco = document.getElementById('txtEndereco');
const txtBairro = document.getElementById('txtBairro');
const txtCidade = document.getElementById('txtCidade');
const txtEstado = document.getElementById('txtEstado');
const txtCEP = document.getElementById('txtCEP');
const txtTelefone = document.getElementById('txtTelefone');
const btnCadastrar = document.getElementById('btnCadastrar');

btnCadastrar.addEventListener('click', () => {
    if(txtSenha.value != txtConfirmarSenha.value) {
        alert("As senhas devem ser iguais!");
    } else {
        const cliente = {
            nome: txtNome.value,
            email: txtEmail.value,
            senha: txtSenha.value,
            senha: txtSenha.value,
            endereco: txtEndereco.value,
            bairro: txtBairro.value,
            cidade: txtCidade.value,
            estado: txtEstado.value,
            cep: txtCEP.value,
            telefone: txtTelefone.value
        }
        cadastrar(cliente);
    }
});

async function cadastrar(cliente) {
    try {
        const response = await fetch('http://localhost:8080/api/clientes', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });
        if (response.ok) {
            alert('Cliente cadastrado com sucesso!');
        } else {
            const error = await response.json();
            alert(error.message);
        }
    } catch(error) {
        alert('Ocorreu um erro inesperado!');          
    }
}