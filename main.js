const nomeContato = document.getElementById('nome');
const telefoneContato = document.getElementById('telefone');
const btnAdicionar = document.getElementById('btn-submit');
const tabelaDados = document.getElementById('tabela');
const tabelaCorpo = document.getElementById('tabelaCorpo');
const forms = document.getElementById('formulario');

btnAdicionar.addEventListener('click', function(e) {
    e.preventDefault();
    capturaDados();
    validaDados();
    atualizaTabela();
    limpaInputs();
});

function capturaDados() {
    let valorNome = nomeContato.value;
    let valorTelefone = telefoneContato.value;
}

function validaDados() {
    if (nomeContato.value == '' && telefoneContato.value == '') {
        alert('Você precisa adicionar nome e telefone.')
    } else {
        alert('Contato cadastrado com sucesso!')
    }
}

function atualizaTabela() {
    if (nomeContato.value.length > 0 && telefoneContato.value.length > 0) {
        tabelaDados.classList.add('tabela-populada'); 

        tabelaCorpo.innerHTML +=  `
            <tr>
                <td><p>${nomeContato.value}</p></td>
                <td><p>${telefoneContato.value}</p></td>
            </tr>` 
};
};

function limpaInputs() {
    nomeContato.value = '';
    telefoneContato.value = '';
}