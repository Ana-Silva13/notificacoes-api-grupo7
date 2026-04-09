const InscricaoService = require("../services/InscricaoService");

function criar(req, res, next) {
    try {
        const novaInscricao = InscricaoService.criar(req.body);
        res.status(201).json(novaInscricao);
    } catch (error) {
        next(error);
    }
}

function listarTodas(req, res, next) {
    try {
        const inscricoes = InscricaoService.listarTodas();
        res.json(inscricoes);
    } catch (error) {
        next(error);
    }
}

function listarPorEvento(req, res, next) {
    try {
        const { eventoId } = req.params;
        const inscricoes = InscricaoService.listarPorEvento(eventoId);
        res.json(inscricoes);
    } catch (error) {
        next(error);
    }
}

function cancelar(req, res, next) {
    try {
        const { id } = req.params;
        InscricaoService.cancelar(id);
        res.status(204).send(); 
    } catch (error) {
        next(error);
    }
}


module.exports = { store: criar, index: listarTodas, listarPorEvento, cancelar };