const { Inscricao, Evento, Participante } = require('../models');
const { NotFoundError, ValidationError } = require('../errors/AppError');

async function criar(dados) {
    // 1. Ajuste aqui: Pegando os nomes exatamente como vêm do Postman (snake_case)
    const { evento_id, participante_id } = dados;

    // 2. Validar se os campos foram enviados
    if (!evento_id || !participante_id) {
        throw new ValidationError('ID do evento e do participante são obrigatórios');
    }

    // 3. Verificar se o evento existe
    const evento = await Evento.findByPk(evento_id);
    if (!evento) throw new NotFoundError('Evento');

    // 4. Verificar se o participante existe
    const participante = await Participante.findByPk(participante_id);
    if (!participante) throw new NotFoundError('Participante');

    // 5. Verificar duplicata
    const jaInscrito = await Inscricao.findOne({
        where: { evento_id, participante_id }
    });
    
    if (jaInscrito) {
        throw new ValidationError('Participante já inscrito neste evento');
    }

    // 6. Criar a inscrição
    const novaInscricao = await Inscricao.create({
        evento_id,
        participante_id,
    });

    return novaInscricao;
}

async function listarTodas() {
    return await Inscricao.findAll({
        include: [
            { model: Evento, as: 'evento', attributes: ['id', 'nome', 'data'] },
            { model: Participante, as: 'participante', attributes: ['id', 'nome', 'email'] },
        ],
        order: [['createdAt', 'DESC']], // Sequelize usa camelCase por padrão para timestamps
    });
}

async function listarPorEvento(eventoId) {
    const id = parseInt(eventoId);
    
    // Validar se o evento existe antes de buscar inscrições
    const evento = await Evento.findByPk(id);
    if (!evento) throw new NotFoundError('Evento');

    return await Inscricao.findAll({
        where: { evento_id: id },
        include: [
            { model: Participante, as: 'participante', attributes: ['id', 'nome', 'email'] }
        ],
        order: [['createdAt', 'DESC']]
    });
}

async function cancelar(id) {
    const inscricao = await Inscricao.findByPk(parseInt(id));
    if (!inscricao) throw new NotFoundError("Inscrição");

    await inscricao.destroy();
    return true;
}

// Exportação correta (fora das funções)
module.exports = { criar, listarTodas, listarPorEvento, cancelar };