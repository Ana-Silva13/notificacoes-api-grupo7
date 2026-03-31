const ParticipanteModel = require("../models/ParticipanteModel");

function index(req, res, next) {
    try {
        const participantes = ParticipanteModel.listarTodos();
        res.json(participantes);
    } catch (erro) {
        next(erro);
    }
}

function show(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const participante = ParticipanteModel.buscarPorId(id);

        if (!participante) {
            return res.status(404).json({ erro: "Participante não encontrado" });
        }
        res.json(participante);
    } catch (erro) {
        next(erro);
    }
}

function store(req, res, next) {
    try {
        const { nome, email } = req.body;

        if (!nome || !email) {
            return res.status(400).json({ erro: "Nome e email são obrigatórios" });
        }

        const novoParticipante = ParticipanteModel.criar({ nome, email });
        res.status(201).json(novoParticipante);
    } catch (erro) {
        next(erro);
    }
}

function update(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const { nome, email } = req.body;

        const participanteAtualizado = ParticipanteModel.atualizar(id, { nome, email });

        if (!participanteAtualizado) {
            return res.status(404).json({ erro: "Participante não encontrado" });
        }

        res.json(participanteAtualizado);
    } catch (erro) {
        next(erro);
    }
}

function destroy(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const deletado = ParticipanteModel.deletar(id);

        if (!deletado) {
            return res.status(404).json({ erro: "Participante não encontrado" });
        }

        res.status(204).send();
    } catch (erro) {
        next(erro);
    }
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};