const ParticipanteService = require("../services/ParticipanteService");
const { isRequired, minLength, isEmail, validar } = require("../helpers/validators");
const { ValidationError, NotFoundError } = require("../errors/AppError");

async function index(req, res, next) {
    try {
        const participantes = await ParticipanteService.listarTodos();
        res.json(participantes);
    } catch (erro) {
        next(erro);
    }
}

async function show(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const participante = await ParticipanteService.buscarPorId(id);

        if (!participante) {
            // Mudou aqui: usando a classe de erro centralizada da Aula 7
            throw new NotFoundError("Participante"); 
        }
        res.json(participante);
    } catch (erro) {
        next(erro);
    }
}

async function store(req, res, next) {
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

        const novoParticipante = await ParticipanteService.criar({ nome, email });
        res.status(201).json(novoParticipante);
    } catch (erro) {
        next(erro);
    }
}

async function update(req, res, next) {
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

        const participanteAtualizado = await ParticipanteService.atualizar(id, { nome, email });

        if (!participanteAtualizado) {
            throw new NotFoundError("Participante");
        }

        res.json(participanteAtualizado);
    } catch (erro) {
        next(erro);
    }
}

async function destroy(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const deletado = await ParticipanteService.deletar(id);

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