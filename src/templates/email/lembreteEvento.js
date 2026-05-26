// Template com lacunas para completar:
const baseTemplate = require('./baseTemplate');
function lembreteEvento(dados) {

  const { participanteNome, eventoNome, eventoData, eventoLocal } = dados;
  // Calcular quantos dias faltam
  const hoje = new Date();
  const dataEvento = new Date(eventoData);
  const diffMs = dataEvento - hoje;
  
  const diasFaltando = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  // Lógica para deixar a mensagem gramaticalmente correta
  let mensagemDias = '';
  if (diasFaltando === 0) {
    mensagemDias = `É <strong>hoje</strong>! O grande dia do evento <strong>${eventoNome}</strong> chegou.`;
  } else if (diasFaltando === 1) {
    mensagemDias = `Falta apenas <strong>1 dia</strong> para o evento <strong>${eventoNome}</strong>!`;
  } else {
    mensagemDias = `Faltam apenas <strong>${diasFaltando} dias</strong> para o evento <strong>${eventoNome}</strong>!`;
  }

  const conteudo = `
    <h2>Lembrete: Evento se aproxima! ⏰</h2>
    <p>Olá <strong>${participanteNome}</strong>,</p>
    <p>${mensagemDias}</p>
    <p>O evento acontecerá no dia <strong>${eventoData}</strong> em: <em>${eventoLocal}</em>.</p>
    <p>Nos vemos lá!</p>
  `;
  return baseTemplate(conteudo);
}

module.exports = lembreteEvento;
