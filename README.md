## 🔧 Scripts

| Comando | Descrição |

| ---------------------------- | -------------------------------------- |

| `npm start`                  | Inicia o servidor (produção)          |

| `npm run dev`                | Inicia com Nodemon (desenvolvimento)  |

| `npm run db:migrate`         | Executa migrations pendentes          |

| `npm run db:migrate:undo`    | Desfaz última migration               |

| `npm run db:seed`            | Insere dados iniciais                 |

| `npm run db:reset`           | Recria banco completo                 |



## 🗄️ Banco de Dados

- **SGBD:** MySQL

- **ORM:** Sequelize

- **Tabelas:** eventos, participantes, inscricoes, notificacoes

## 📁 Estrutura do Projeto

src/ 
├── config/ → Banco de dados, upload, cache 
├── controllers/ → Recebe requisições, retorna respostas 
├── database/ │   
     ├── migrations/  → Versionamento do esquema do banco │   
     └── seeders/     → Dados iniciais para desenvolvimento 
├── errors/ → Classes de erro customizadas 
├── helpers/ → Funções auxiliares (validação) 
├── middlewares/ → Logger, CORS, erros, cache 
├── models/ → Modelos Sequelize (tabelas do banco) 
├── routes/ → Mapeamento de URLs 
├── services/ → Lógica de negócio 
      ├── swagger.js → Configuração da documentação 
      ├── app.js → Configuração do Express 
      └── server.js → Inicialização do servidor

### Notificações

| Método | Rota                         | Descrição                       |

|--------|------------------------------|---------------------------------|

| GET    | /notificacoes                | Listar (filtros: tipo, enviada) |

| GET    | /notificacoes/estatisticas   | Dashboard de envios             |

| GET    | /notificacoes/:id            | Detalhes                        |

| POST   | /notificacoes/:id/reenviar   | Reenviar                        |

| POST   | /notificacoes/teste-email    | Enviar e-mail de teste          |
 
### Exportação

| Método | Rota                           | Descrição                  |

|--------|--------------------------------|----------------------------|

| GET    | /exportar/eventos/xml          | Eventos em XML             |

| GET    | /exportar/eventos/json         | Eventos em JSON (download) |

| GET    | /exportar/relatorio/inscricoes | Relatório de inscrições    |

## 📧 Sistema de Notificações

A API envia e-mails automaticamente usando o **Padrão Observer**:

- **Confirmação de inscrição** — enviado ao criar uma inscrição

- **Cancelamento** — enviado ao cancelar uma inscrição

Em desenvolvimento, os e-mails são capturados pelo **MailPit** (servidor SMTP local).

Visualize os e-mails em `http://MAILPIT_IP:8025`.


````markdown
# 🔔 Notificações API

API REST para módulo de notificações por e-mail de uma plataforma de eventos.

![Node.js](https://img.shields.io/badge/Node.js-24+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MariaDB](https://img.shields.io/badge/MariaDB-11.x-blue)
![Deploy](https://img.shields.io/badge/Deploy-Servidor%20SENAI-blueviolet)

**🌐 URL de Produção:** [endereço IP do seu container no servidor]
**📚 Documentação:** [sua URL]/api-docs

---

## 📋 Sobre o Projeto

Sistema de notificações por e-mail para uma plataforma de eventos.
Quando um participante se inscreve em um evento, recebe automaticamente
um e-mail de confirmação. O sistema também envia notificações de cancelamento.

**Desenvolvido como projeto da SA2** — SENAI "Santo Paschoal Crepaldi"
Curso: Técnico em Desenvolvimento de Sistemas
UCs: Programação Back-End + Projetos de Software

### Equipe

- [Ana Júlia Menezes da Silva] — [GitHub](https://github.com/Ana-Silva13)
- [Lara Segatello Marquez ] — [GitHub](https://github.com/lara_segatello)
- [Maria Luiza Bassi] — [GitHub](https://github.com/MaluBassi)
- [Maria Clara Taylor ] — [GitHub](https://github.com/mc-taylor27)

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 24+
- MySQL 8.0 ou MariaDB 11+
- Git

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/USUARIO/notificacoes-api-grupoX.git
   cd notificacoes-api-grupoX
   ```
````

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o ambiente:

   ```bash
   cp .env.example .env
   # Edite o .env com suas credenciais do banco de dados
   ```

4. Crie o banco e execute as migrations:

   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. Inicie o servidor:

   ```bash
   npm run dev
   ```

6. Acesse:
   - API: http://localhost:3000
   - Swagger: http://localhost:3000/api-docs

---

## 📚 Rotas da API

### Eventos

| Método   | Rota        | Descrição                              |
|----------|-------------|----------------------------------------|
|  GET     | /futuros    | Listar todos os futuros eventos        |
|  GET     | /           | Listar todos os eventos                |
|  GET     | /:id        | Busca detalhes de um evento específico |
|  POST    | /           | Cria um novo evento                    |
|  PUT     | /:id        | Atualiza os dados de um evento         |
|  DELETE  | /:id        | Remove um evento do sistema            |
|  POST    | /:id/banner | Adiciona uma imagem ao sistema         | 

### Participantes

|Método  | Rota               | Descrição                                              |
|--------|--------------------|--------------------------------------------------------|
|  GET   | /participantes     | Listar todos os particpantes                           |
|  GET   | /participantes/:id | Obter os detalhes de um participante específico por ID |
|  POST  | /participantes     | Criar um novo participante                             |
|  PUT   | /participantes/:id | Atualizar os dados de um participante existente por ID |
|  DELETE| /participantes/:id | Deletar um participante do sistema por ID              |

### Inscrições

|Método  | Rota                         | Descrição                                                                 |
|--------|------------------------------|---------------------------------------------------------------------------|
|  POST  | /inscricoes                  | Criar uma nova inscrição                                                  |
|  GET   | /inscricoes                  | Listar todas as inscrições cadastradas                                    |
|  GET   | /inscricoes/evento/:eventoId | Listar todas as inscrições vinculadas a um evento específico por ID       |
|  PATCH | /inscricoes/:id/cancelar     | Cancelar uma inscrição específica por ID (atualização parcial do  status) |

### Notificações
| Método    | Rota          | Descrição                                     |
|-----------|---------------|-----------------------------------------------|
| GET       | /             | Listar todas as notificações com filtros      |
| GET       | /estatistica  | Retorna o dashboard e contagens de envios     |
| GET       | /:id          | Busca detalhes de uma notificação específica  |
| POST      | /:id/reenviar | Reenvia uma notificação existente por ID      |
| POST      | /teste-email  | Envia um e-mail de teste para validação da API|

### Exportação

| Método    | Rota                                | Descrição                                                              |
|-----------|-------------------------------------|------------------------------------------------------------------------|
| GET       | /exportar/eventos/xml               | Exporta a lista completa de eventos ordenados por data no formato      |
| GET       | /exportar/eventos/json              | Download da lista de eventos em JSON.                                  |
| GET       | /exportar/relatorio/inscricoes      | Relatório JSON de inscrições por evento e vagas.                       |
| GET       | /exportar/relatorio/inscricoes/csv  | Baixa o relatório consolidado (CSV) de eventos e participantes.        |

                                                                                                                              
---

## 🛠️ Tecnologias

| Tecnologia           | Finalidade                     |
| -------------------- | ------------------------------ |
| Node.js              | Runtime                        |
| Express.js           | Framework web                  |
| MariaDB              | Banco de dados                 |
| Sequelize            | ORM                            |
| Nodemailer + MailPit | Envio de e-mails (teste local) |
| Swagger              | Documentação                   |
| Multer               | Upload de arquivos             |

---

## 📁 Estrutura do Projeto

notificacoes-api-grupo7/
├── docs/
│   ├── insomnia - aula 7/
│   ├── insomnia-aula6/
│   ├── insomnia-desafio-aula8/
│   ├── menezes-trabalhos/
│   ├── sprint-reviews/
│   ├── arquitetura.md
│   ├── auditoria-qualidade.md
│   ├── Captura de tela 2026-03-03 13561...
│   ├── custos.md
│   ├── definition-of-done.md
│   ├── duvidas.md
│   ├── infraestrutura.md
│   ├── Insomnia_2026-05-12.yaml
│   ├── Insomnia_2026-05-28.yaml
│   ├── pesquisa-mercado.md
│   ├── project-charter.md
│   ├── relatorio-final.md
│   ├── riscos.md
│   ├── standup-log.md
│   ├── status-report.md
│   ├── teste-integracao.md
│   └── wbs.md
├── src/
│   ├── config/
│   │   ├── cache.js
│   │   ├── database.js
│   │   ├── database.json.example
│   │   └── upload.js
│   ├── controllers/
│   │   ├── EventoController.js
│   │   ├── InscricaoController.js
│   │   └── ParticipanteController.js
│   ├── database/
│   │   ├── migrations/
│   │   │   ├── 20260428125430-criar-tabela-e...
│   │   │   ├── 20260428125805-criar...
│   │   │   ├── 20260428125842-criar-tabela-i...
│   │   │   ├── 20260428130108-criar-tabela-n...
│   │   │   └── 20260505134413-adicionar-ban...
│   │   └── seeders/
│   │       └── 20260428131258-dados-iniciais...
│   ├── errors/
│   │   └── AppError.js
│   ├── events/
│   │   ├── eventBus.js
│   │   ├── eventEmitter.js
│   │   ├── eventObserver.js
│   │   ├── logObserver.js
│   │   └── notificacaoObserver.js
│   ├── helpers/
│   │   └── validators.js
│   ├── logs/
│   │   └── app.log
│   ├── middlewares/
│   │   ├── cacheMiddleware.js
│   │   ├── errorHandler.js
│   │   ├── logger.js
│   │   ├── notFound.js
│   │   └── responseTime.js
│   ├── models/
│   │   ├── EventoModel.js
│   │   ├── index.js
│   │   ├── NotificacaoModel.js
│   │   └── ParticipanteModel.js
│   ├── routes/
│   │   ├── eventoRoutes.js
│   │   ├── exportRoutes.js
│   │   ├── inscricaoRoutes.js
│   │   ├── notificacaoRoutes.js
│   │   └── participanteRoutes.js
│   ├── services/
│   │   ├── EmailService.js
│   │   ├── EventoService.js
│   │   ├── InscricaoService.js
│   │   ├── NotificacaoService.js
│   │   └── ParticipanteService.js
│   ├── templates/
│   │   └── email/
│   │       ├── baseTemplate.js
│   │       ├── cancelamentoInscricao.js
│   │       ├── confirmacaoInscricao.js
│   │       └── lembreteEvento.js
│   ├── app.js
│   ├── newFile.js
│   ├── server.js
│   └── swagger.js
├── uploads/
│   ├── 1778515836380-807976860.png
│   ├── 1778515935928-760863667.jpg
│   ├── 1778516507443-917332717.jpg
│   ├── 1778516764714-185180134.jpg
│   ├── 1778584353484-164001302.jpg
│   ├── 1778584973457-39768604.png
│   └── 1779803698466-680329190.png
├── .env.exemple
├── .gitignore
├── .sequelizerc
├── package-lock.json
├── package.json
├── README copy.md
└── README.md
            

---

## 🔧 Scripts Disponíveis

| Comando              | Descrição             |
| -------------------- | --------------------- |
| `npm start`          | Inicia em produção    |
| `npm run dev`        | Inicia com Nodemon    |
| `npm run db:migrate` | Executa migrations    |
| `npm run db:seed`    | Insere dados iniciais |
| `npm run db:reset`   | Recria banco completo |

---

## 📧 Sistema de Notificações

A API usa o **Padrão Observer** para disparar notificações automaticamente:

- ✅ Confirmação de inscrição
- ✅ Cancelamento de inscrição

Em desenvolvimento, e-mails são capturados pelo MailPit (servidor SMTP local na rede da sala).

---

## 📄 Licença

Projeto acadêmico — SENAI 2026

````