/*
0 obter um usuario
1 obter o numero de telefone de um usuario a partir de seu id
2 obter o endereco do usuario pelo id
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    },1000);
}

//syncronização de chamadas
function resolverUsuario(erro, usuario) {
    console.log('Usuario: ', usuario);
}

function obterTelefone(idUsuario) {
    setTimeout(() => {
        return {
            telefone: '1199002',
            ddd: 11
        }
    },2000);
}

function obterEndereco(idUsuario) {

}

obterUsuario(resolverUsuario);

// const telefone = obterTelefone(usuario.id);

// console.log('Telefone: ', telefone);