const InscricaoModel = require("../models/inscricaoModel");
const EventoModel = require("../models/EventoModel");
const ParticipanteModel = require("../models/ParticipanteModel");
const { NotFoundError, ValidationError } = require("../errors/AppError");
const { isRequired, validar } = require("../helpers/validators");

function criar(dados) {
    const { eventoId, participanteId } = dados;

    const erros = validar([
        isRequired(eventoId, "eventoId"),
        isRequired(participanteId, "participanteId"),
    ]);
    if (erros) throw new ValidationError(erros.join("; "));

    const idEv = parseInt(eventoId);
    const idPart = parseInt(participanteId);

    if (!EventoModel.buscarPorId(idEv)) throw new NotFoundError("Evento");
    if (!ParticipanteModel.buscarPorId(idPart)) throw new NotFoundError("Participante");

   
    return InscricaoModel.criar(idEv, idPart);
}

function listarTodas() {
    return InscricaoModel.listarTodas();
}

function listarPorEvento(eventoId) {
    const id = parseInt(eventoId);
    if (!EventoModel.buscarPorId(id)) throw new NotFoundError("Evento");
    return InscricaoModel.listarPorEvento(id);
}

function cancelar(id) {
    const cancelado = InscricaoModel.cancelar(parseInt(id));
    if (!cancelado) throw new NotFoundError("Inscrição");
    return true;
}

module.exports = { criar, listarTodas, listarPorEvento, cancelar };