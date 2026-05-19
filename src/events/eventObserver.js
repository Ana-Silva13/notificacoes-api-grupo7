const eventBus = require('./eventBus');

eventBus.on('evento:criado', (evento) => {
    const dataFormatada = new Date().toLocaleString('pt-BR');

    console.log(`[ ${dataFormatada} ] 📢 LOG: Novo evento criado com sucesso!`);
    console.log(`  -> ID: ${evento.id}`)
    console.log(`  -> Nome: ${evento.nome}`);
});

module.exports = eventBus;