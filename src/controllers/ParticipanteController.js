const ParticipanteModel = require("../models/ParticipanteModel");
const { isRequired, minLength, isEmail, validar } = require("../helpers/validators");
const { ValidationError, NotFoundError } = require("../errors/AppError");

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
            // Mudou aqui: usando a classe de erro centralizada da Aula 7
            throw new NotFoundError("Participante"); 
        }
        res.json(participante);
    } catch (erro) {
        next(erro);
    }
}

function store(req, res, next) {
    try {
        const { nome, email } = req.body;

        // --- NOVA VALIDAÇÃO DA AULA 8 AQUI ---
        const erros = validar([
            isRequired(nome, "Nome"),
            minLength(nome, 2, "Nome"),
            isRequired(email, "Email"),
            isEmail(email)
        ]);

        if (erros) {
            throw new ValidationError(erros.join("; "));
        }
        // -------------------------------------

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

        // --- NOVA VALIDAÇÃO DA AULA 8 AQUI (Sem isRequired) ---
        const erros = validar([
            minLength(nome, 2, "Nome"),
            isEmail(email)
        ]);

        if (erros) {
            throw new ValidationError(erros.join("; "));
        }

        const participanteAtualizado = ParticipanteModel.atualizar(id, { nome, email });

        if (!participanteAtualizado) {
            throw new NotFoundError("Participante");
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
            throw new NotFoundError("Participante");
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