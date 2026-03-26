// src/controllers/InscricaoController.js
const InscricaoModel = require("../models/inscricaoModel");
// POST /inscricoes — criar uma inscrição
function store(req, res) {
    const { eventoId, participanteId } = req.body;
    if (!eventoId || !participanteId) {
        return res
            .status(400)
            .json({ erro: "eventoId e participanteId são obrigatórios" });
    }
    const resultado = InscricaoModel.criar(
        parseInt(eventoId),
        parseInt(participanteId),
    );
    // Se o resultado tem a propriedade "erro", algo deu errado
    if (resultado.erro) {
        return res.status(400).json(resultado);
    }
    res.status(201).json(resultado);
}
// GET /inscricoes — listar todas
function index(req, res) {
    const incricoes = InscricaoModel.listarTodas();
    res.json(incricoes);
    // Implemente: retorne todas as inscrições

}
// GET /inscricoes/evento/:eventoId — listar inscrições de um evento
function listarPorEvento(req, res) {
    const eventoId = parseInt(req.params.eventoId);
    res.json(InscricaoModel.listarPorEvento(eventoId));
}
// PATCH /inscricoes/:id/cancelar — cancelar uma inscrição
function cancelar(req, res) {
    const id = parseInt(req.params.id);
    const inscricao = InscricaoModel.cancelar(id);
    if (!inscricao) {
        return res.status(404).json({ erro: "Inscrição não encontrada" });
    }
    res.json(inscricao);
}


module.exports = { store, index, listarPorEvento, cancelar };