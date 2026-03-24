let participantes = [
{ id: 1, nome: "Ana Silva", email: "ana@email.com" },
{ id: 2, nome: "Carlos Souza", email: "carlos@email.com" },
{ id: 3, nome: "Maria Santos", email: "maria@email.com" },
];
let proximoId = 4;

function listarTodos() {
    return participantes;
}

function buscarPorId(id) {
    return participantes.find((p) => p.id === id);
}
function criar(dados) {
const novoParticipante = {
id: proximoId,
nome: dados.nome,
email: dados.email,
};

proximoId++;
participantes.push(novoParticipante);
return novoParticipante;
}
function atualizar(id, dados) {
const index = participantes.findIndex((p) => p.id === id);


}
function deletar(id) {
const index = participantes.findIndex((p) => p.id === id);
if (index !== -1) {
participantes.splice(index, 1);
return true;
}

return false;
}
module.exports = {
listarTodos,
buscarPorId,
criar,
atualizar,
deletar,
};