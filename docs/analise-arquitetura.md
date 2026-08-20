Nomes: Ana Júlia Menezes, Lara Segatello, Maria Clara Taylor e Maria Luiza Bassi.


## ROTAS: 

Camada : Rotas 

Arquivos encontrados: routes/auth.routes.js ,
                      notificacao.routes.js ,
                      evento.routes.js ,
                      participante.routes.

Responsabilidade (em uma frase): Mapear caminho + verbo
                                 HTTP para um controller;
                                 aplicar middlewares

## CONTROLLERS:

Camada : Controllers 


Arquivos encontrados: EventoController.js,
                      InscricaoController.js
                      ParticipanteController.js

Responsabilidade (em uma frase):Recebe as requisições HTTP, 
                                Valida os dados de entrada 
                                Envia a resposta final ao cliente.

## SERVICE:

Camada: Service

Arquivos encontrados: EmailService.js
                      EventoService.js
                      InscricaoService.js
                      NotificacaoService.js
                      ParticipanteService.js

Responsabilidade (em uma frase): Camada de Serviço, onde organiza regras de negócio e fluxo de operção da API de notificações.
                      



## MODELS:

Camada: Models 

Arquivos encntrados: EventoModel.js
                     index.js
                     InscricaoModel.js
                     NotificacaoModel.js
                     ParticipanteModel.js

Responsabilidade (em uma frase): Representa as entidades do sistema,
                                 Encapsula a regra de negócio/dados 
                                 Gerencia a persistência e comunicação.



## MIDDILEWARES:

Camada: Middleware

Arquivos encontrados: cacheMiddleware.js 
                     errorHander.js
                      logger.js
                      notFound.js
                      responseTime.js 

Responsabilidade (em uma frase): Atua no meio do caminho entre o pediodo cliente e a execução final  envio da mensagem.
   


## CONFIGURAÇÃO / .ENV

Camada: Configuração / .env

Arquivos encontrados: cache.js
                      database.js
                      database.json.example
                      upload.js
                      .env.exemple
                      .gitignore

Responsabilidade (em uma frase): Centralizar as variáveis de ambiente e as definições globais do sistema para conectar com segurança serviços externos como banco de dados, cache e armazenamento de arquivos.   
     



## DATA BASE:      

    |_ MIGRATIONS
    |_SEEDERS
    
    MIGRATIONS:
    Camada: migrations
   
    Arquivos encontrados: 20260428125430-criar-tabela-eventos.js
                          20260428125805-criar-tabela-participantes.js
                          20260428125842-criar-tabela-inscricoes.js
                          20260428130108-criar-tabela-notificacoes.js
                          20260505134413-adicionar-banner-eventos.js
   
    Responsabilidade (em uma frase): versionar e automatizar a criação e evolução da estrutura do banco de dados.   

    SEEDERS:

    Camada:seeders

    
    Arquivos encontrados: 20260428131258-dados-iniciais.js
    
    Responsabilidade (em uma frase): Popular o banco de dados com dados iniciais ou de teste, facilitando o desenvolvimento e a validação do sistema.

## ERRORS 

Camada: Errors

Arquivos encontrados: AppError.js

Responsabilidade (em uma frase): Centralizar e padronizar o tratamento de exceções customizadas da aplicação, permitindo diferenciar erros operacionais esperados de falhas inesperadas do sistema.


## EVENTS 

Camada: events 

Arquivos encontrados: eventBus.js
                      eventEmitter.js
                      eventObserver.js
                      logObserver.js
                      notificacaoObserver.js

Responsabilidade (em uma frase): Gerenciar a comunicação assíncrona e desacoplada entre diferentes partes do sistema por meio da publicação, emissão e observação de eventos.


## HELPERS 

Camada: helpers 

Arquivos encontrados: validators.js

Responsabilidade (em uma frase): Fornecer funções utilitárias reutilizáveis para a validação de dados e regras de formato em diversos pontos da aplicação.


## LOGS

Camada: logs

Arquivos encontrados: app.log

Responsabilidade ( em uma frase): Registrar e armazenar o histórico de execução, eventos e erros da aplicação para fins de auditoria, monitoramento e depuração.


## TEMPLATTES / EMAIL 

Camadas: templates/email
Arquivos encontrados: baseTemplate.js
                      cancelamentoInscricao.js
                      confirmacaoInscricao.js
                      lembreteEvento.js
Responsabilidade (em uma frase): 
Responsabilidade (em uma frase): Estruturar e gerar o conteúdo HTML/texto das notificações por e-mail, reutilizando um layout base para padronizar mensagens do ciclo de vida dos eventos.


## UPLOADS

Camada: uploads

Arquivos encontrados: 1778515836380-807976860.png
                      1778515935928-760863667.jpg
                      1778516507443-917332717.jpg
                      1778516764714-185180134.jpg
                      1778584353484-164001302.jpg
                      1778584973457-39768604.png
                      1779803698466-680329190.png

Responsivilidade (em uma frase): Armazenar arquivos enviados pelos usuários, como imagens e documentos, garantindo que estejam acessíveis para uso posterior na aplicação.

#  | Método | Caminho                   | Exige Token? | Controller            | Service             | Model(s)         | Efeito Colateral                           |
---|--------|---------------------------|--------------|-----------------------|---------------------|------------------|--------------------------------------------|
1  | POST   |   /auth/login             |      Não     | AuthController        | AuthService         | UserModel        | Gera token                                 |
2  |  GET   |  /eventos                 |      Não     | EventoController      | EventoService       | EventoModel      | Nenhum                                     |
3  |  POST  |  /eventos                 |      Sim     | EventoController      | EventoService       | EventoModel      | Cria evento                                |
4  |  GET   |  /eventos/:id             |      Não     | EventoController      | EventoService       | EventoModel      | Nenhum                                     |
5  |  PUT   |  /eventos/:id             |      Sim     | EventoController      | EventoService       | EventoModel      | Atualiza evento                            | 
6  | DELETE |  /eventos/:id             |      Sim     | EventoController      | EventoService       | EventoModel      | Deleta evento                              |
7  |  GET   |  /participantes           |      Não     | ParticipanteController| ParticipanteService | ParticipanteModel| Nenhum                                     |
8  |  POST  |  /participantes           |      Sim     | ParticipanteController| ParticipanteService | ParticipanteModel| Cria participante                          |
9  |  GET   |  /participantes/:id       |      Não     | ParticipanteController| ParticipanteService | ParticipanteModel| Nenhum                                     |
10 | PUT    |  /participantes/:id       |      Sim     | ParticipanteController| ParticipanteService | ParticipanteModel| Atualiza participante                      |
11 | DELETE |  /participantes/:id       |      Sim     | ParticipanteController| ParticipanteService | ParticipanteModel| Deleta participante                        |
12 | GET    |  /inscricoes              |      Não     | InscricaoController   | InscricaoService    | InscricaoModel   | Nenhum                                     |
13 | POST   |  /inscricoes              |      Sim     | InscricaoController   | InscricaoService    | InscricaoModel   | Cria inscrição                             |
14 | GET    |  /inscricoes/:id          |      Não     | InscricaoController   | InscricaoService    | InscricaoModel   | Nenhum                                     |
15 | PUT    |  /inscricoes/:id          |      Sim     | InscricaoController   | InscricaoService    | InscricaoModel   | Atualiza inscrição                         |
16 | DELETE |  /inscricoes/:id          |      Sim     | InscricaoController   | InscricaoService    | InscricaoModel   | Deleta inscrição                           |
17 | POST   |  /notificacoes            |      Sim     | NotificacaoController | NotificacaoService  | NotificacaoModel | Envia notificação                          |
18 | GET    |  /notificacoes            |      Sim     | NotificacaoController | NotificacaoService  | NotificacaoModel | Lista notificações                         |
19 | GET    |  /notificacoes/:id        |      Sim     | NotificacaoController | NotificacaoService  | NotificacaoModel | Detalha notificação                        |
20 | DELETE |  /notificacoes/:id        |      Sim     | NotificacaoController | NotificacaoService  | NotificacaoModel | Deleta notificação                         |
21 | GET    |  /notificacoes/evento/:id |      Sim     | NotificacaoController | NotificacaoService  | NotificacaoModel | Lista notificações de um evento específico |




### Parte 3 — Que nível de teste cabe onde?

| # | Comportamento a verificar | Nível | Por que este nível |
| **1** | Requisição `POST /auth/login` sem token/com senha inválida devolve status `401 Unauthorized`. | `endpoint` | A verificação valida diretamente a resposta HTTP (código de status e cabeçalho) da rota de autenticação. |
| **2** | O envio de notificação grava o registro com status "ENVIADO" na tabela/coleção do banco de dados. | `integração` | A verificação precisa garantir que o dado referente à notificação realmente persistiu no banco de dados. |
| **3** | A função de validação de evento impede o cadastro se a data do evento for anterior à data atual. | `unitário` | É uma regra de negócio pura sobre eventos que roda apenas na memória com os dados passados, sem precisar de banco ou HTTP. |
| **4** | Requisição `POST /participantes` para vincular usuário ao evento devolve status `201 Created` e corpo em JSON. | `endpoint` | Envolve a verificação da porta da frente da API (status code HTTP 201 e estrutura da resposta). |
| **5** | O helper/utilitário de template de e-mail substitui corretamente as variáveis `{nome}` e `{data}` na mensagem. | `unitário` | Trata-se de uma função lógica pura de formatação que roda de forma isolada sem dependências externas de rede ou banco. |



### Parte 4 — Análise

#### 4.1 Se uma única funcionalidade do módulo falhasse silenciosamente em produção — sem mensagem de erro, sem log —, qual delas causaria o maior estrago? Por quê?
**Resposta:** O envio de notificações por e-mail (serviço Nodemailer/MailPit).  
**Justificativa:** Se a funcionalidade de envio falhar silenciosamente, a API continuará retornando status `200 OK` para as requisições e gravando os registros no banco como se tivessem sido processados. Os usuários e organizadores de eventos acreditarão que os participantes foram comunicados, quando na verdade nenhum e-mail foi entregue. Isso gera falhas de comunicação críticas em tempo real e falsa sensação de funcionamento do sistema.

---

#### 4.2 Quais pontos do módulo dependem de algo externo ao código de vocês (banco, servidor de e-mail, relógio do sistema, variáveis de ambiente)? Listem todos.
**Resposta:** O módulo possui as seguintes dependências externas:
- **Banco de Dados (ex: MongoDB / PostgreSQL):** Dependência de rede e do serviço do banco de dados ativo para operações de CRUD em todas as entidades.
- **Servidor de E-mail (Nodemailer / MailPit / SMTP):** Dependência de rede e do serviço de mensageria local ou externo para o envio e disparo efetivo das mensagens.
- **Variáveis de Ambiente (`.env`):** Dependência de configurações de execução lidas do sistema operacional (como `PORT`, `DATABASE_URL`, `JWT_SECRET`, host/porta do SMTP).
- **Relógio do Sistema (`Date.now()` / `new Date()`):** Dependência da hora exata do servidor/sistema operacional para validar expiração de tokens JWT, comparar datas de eventos e registrar *timestamps* de logs/notificações.

---

#### 4.3 Escolham uma função ou método que seja regra de negócio pura — algo que roda sem precisar de banco nem de rede. Copiem o nome e o arquivo.
**Resposta:** `validarFormatoEmail()` localizado no arquivo `src/utils/validators.js` *(ou a função equivalente no projeto do seu grupo, como `substituirVariaveisTemplate` em `src/helpers/notificationHelper.js`)*.  
**Justificativa:** É uma função pura que recebe apenas uma string como argumento e executa expressões regulares (Regex) ou manipulação de texto em memória, sem disparar chamadas I/O, conexões com banco de dados ou requisições HTTP.

---

#### 4.4 Existe alguma parte do módulo que vocês não sabem explicar o que faz? Registrem qual.
**Resposta:** O middleware de autenticação (`src/middlewares/auth.middleware.js`), especificamente o trecho de extração e verificação da assinatura do token JWT (`jwt.verify`).  
**Justificativa:** Embora a equipe compreenda o propósito geral do middleware (proteger rotas privadas), os detalhes da decodificação do cabeçalho `Authorization: Bearer <token>` e o tratamento interno de expiração do algoritmo do JWT ainda não são 100% claros, necessitando de uma investigação mais detalhada na fase de planejamento de testes.


### Parte 5 Olhando o mapa de rotas da Parte 2: qual rota vocês classificariam como a de maior risco e qual como a de menor risco? Justifiquem.

**Rota de maior risco:** `POST /notificacoes`  
**Justificativa:** Essa rota tem uma alta probabilidade de conter defeitos devido à complexidade do envio de notificações, que envolve integração com serviços externos (como Nodemailer ou MailPit) e manipulação de dados sensíveis. O impacto se falhar é significativo, pois pode levar à não comunicação de informações importantes para os usuários, afetando diretamente a experiência e a funcionalidade do sistema.

**Rota de menor risco:** `GET /notificacoes/:id`  
**Justificativa:** Essa rota é relativamente simples e tem baixa probabilidade de falha. O impacto se falhar é menor, pois apenas retorna informações existentes sobre uma notificação específica, sem alterar dados ou interagir com serviços externos.