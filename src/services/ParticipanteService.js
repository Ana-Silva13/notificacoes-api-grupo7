// const ParticipanteModel = require("../models/ParticipanteModel");
// const { NotFoundError, ValidationError } = require("../errors/AppError");
// const {
//     isRequired,
//     isEmail,
//     minLLength,
//     validar,
// } = require("../helpers/validators");

// function listarTodos() {
//     return ParticipanteModel.listarTodos();
// }

// function buscarPorId(id) {
//     const participante = ParticipanteModel.buscarPorId(id);

//     if (!participante) {
//         throw new NotFoundError("Participante");
//     }

//     return participante
// }

// function criar(dados) {
//     const { nome, email } = dados;

//     const erros = validar([
//         isRequired(nome, "Nome"),
//         isRequired(email, "Email"),
//         minLength(nome, 2, "Nome"),
//         isEmail(email) //*
//     ]);

//     if (erros) throw new ValidationError(erros.join(";"));

//     return ParticipanteModel.criar({ nome, email });
// }

// function atualizar(id, dados) {

//     const { nome, email } = dados;

//     const erros = validar([
//         minLength(nome, 2, "Nome"),
//         isEmail(email),
//     ]);

//     if (erros) {
//         throw new ValidationError(erros.join(";"));
//     }

//     const participanteAtualizado = ParticipanteModel.atualizar(id, dados);

//     if (!participanteAtualizado) {
//         throw new NotFoundError("Participante");
//     }

//     return participanteAtualizado;
// }

// function deletar(id) {
//     const deletado = ParticipanteModel.deletar(id);

//     if (!deletado) {
//         throw new NotFoundError("Participante");
//     }

//     return true;
// }

// module.exports = { listarTodos, buscarPorId, criar, atualizar, deletar };



//Substituição:



const { Participante } = require('../models');

const { NotFoundError } = require('../errors/AppError');

const appEmitter = require('../events/eventEmitter');

async function listarTodos() {
    return await Participante.findAll({ order: [['nome', 'ASC']] });
}

async function buscarPorId(id) {

    const participante = await ParticipanteModel.buscarPorId(id);

    if (!participante) {
        throw new NotFoundError("Participante");
    }

    return participante
 }
  

async function criar(dados) {
   try {
    const novoParticipante = await Participante.create(dados);
    // Emitir evento para observers (e-mail de boas-vindas, etc.)
    appEmitter.emit('participante:criado', novoParticipante);
    return novoParticipante;
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      console.error(error.errors.map(e => e.message));
    } else if (error.name === 'SequelizeUniqueConstraintError') {
      console.error("Registro duplicado detectado.");
    } else {
      console.error(error.message);
    }
    throw error;
  }
}

// Atualizar e deletar ficam para a próxima aula

async function atualizar(id, dados) { /* TODO */ }

async function deletar(id) { /* TODO */ }

module.exports = { listarTodos, buscarPorId, criar, atualizar, deletar };
