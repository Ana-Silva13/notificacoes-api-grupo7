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

async function exportar(req, res) {
  try {
    const xmlGerado = await InscricaoService.exportarParaXML();

    // Fundamental: Define o tipo de conteúdo como XML
    res.header('Content-Type', 'application/xml');
    
    // Retorna o XML com status 200 (Sucesso)
    return res.status(200).send(xmlGerado);

  } catch (erro) {
    console.error('Erro ao gerar XML:', erro);
    // Se der erro, voltamos para o JSON para explicar o problema
    return res.status(500).json({ erro: 'Falha ao gerar a exportação em XML.' });
  }
}

module.exports = { store, index, listarPorEvento, cancelar, exportar };