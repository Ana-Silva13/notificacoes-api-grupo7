const InscricaoService = require('../services/InscricaoService');

async function store(req, res, next) {
  try {
    const novaInscricao = await InscricaoService.criar(req.body);
    res.status(201).json(novaInscricao);
  } catch (erro) {
    next(erro);
  }
}

async function index(req, res, next) {
  try {
    const inscricoes = await InscricaoService.listarTodas();
    res.json(inscricoes);
  } catch (erro) {
    next(erro);
  }
}

async function listarPorEvento(req, res, next) {
    try {
        const { eventoId } = req.params;
        const inscricoes = await InscricaoService.listarPorEvento(eventoId);
        res.json(inscricoes);
    } catch (error) {
        next(error);
    }
}

async function cancelar(req, res, next) {
    try {
        const { id } = req.params;
        await InscricaoService.cancelar(id);
        res.status(204).send(); 
    } catch (error) {
        next(error);
    }
}

module.exports = { store, index, listarPorEvento, cancelar };