const { Inscricao, Evento, Participante } = require('../models');
const { NotFoundError, ValidationError } = require('../errors/AppError');
const appEmitter = require('../events/eventEmitter');

async function criar(dados) {
    // 1. Ajuste aqui: Pegando os nomes exatamente como vêm do Postman (snake_case)
    const { evento_id,   participante_id } = dados;

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
        evento_id: evento_id,
        participante_id: participante_id,
    });

    appEmitter.emit('inscricao:criada', novaInscricao);
    
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

    await inscricao.update({ status: 'cancelada' }); 
    appEmitter.emit('inscricao:cancelada', inscricao);

    return inscricao;
}

async function exportarParaXML() {
  // 1. Busca no banco com os dados relacionados (JOIN)
  const inscricoes = await Inscricao.findAll({
    include: [
      {
        model: Evento,
        as: 'evento', // Ajuste caso seu alias no model seja diferente
        attributes: ['nome'] 
      },
      {
        model: Participante,
        as: 'participante', // Ajuste caso seu alias seja usuario, etc.
        attributes: ['nome', 'email']
      }
    ]
  });

  // 2. Construção do XML
  // Iniciamos o cabeçalho padrão do XML e a tag raiz
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<inscricoes>\n';

  // 3. Iteramos sobre cada registro para montar os "nós" do XML
  inscricoes.forEach((inscricao) => {
    xml += `  <inscricao>\n`;
    xml += `    <id>${inscricao.id}</id>\n`;
    xml += `    <status>${inscricao.status}</status>\n`;
    
    // Acessando os dados do Evento incluído
    xml += `    <evento>${inscricao.evento.nome}</evento>\n`;
    
    // Acessando os dados do Participante incluído
    xml += `    <participante>\n`;
    xml += `      <nome>${inscricao.participante.nome}</nome>\n`;
    xml += `      <email>${inscricao.participante.email}</email>\n`;
    xml += `    </participante>\n`;
    
    xml += `  </inscricao>\n`;
  });

  // Fechamos a tag raiz
  xml += '</inscricoes>';

  return xml;
}

// Exportação correta (fora das funções)
module.exports = { criar, listarTodas, listarPorEvento, cancelar, exportarParaXML };