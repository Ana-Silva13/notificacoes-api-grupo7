# Plano de Testes — Módulo de Notificações

## 1 Identificação 

Sistema: Módulo de Notificações - Plataforma de Eventos
Versão: 1.0.0
Repositório: https://github.com/Ana-Silva13/notificacoes-api-grupo7
Grupo / Integrantes: Ana Júlia Menezes, Lara Segatello, Maria Clara Taylor e Maria Luiza Bassi
Data de elaboração: 20/08/2026
Última revisão: 20/08/2026

# Parte 2

## 2.1:

Melhor planejamento e organização para um projeto eficiente e e eficaz

## 2.2

| Funcionalidade / camada | Níveis previstos | 
| ---------------------------------------- | ---------------- |
| Criação e Edição de Eventos              | Testes funcionais e de interface |
| Formulário de Inscriçãao do Participante | Testes Funcionais, de Usabilidade e Validação de Dados |
| Geração de Comprovante / Ingresso        | Testes de Integração(API de e-mail e serviço de geração de comprovantes)
| Painel de Gestão de Inscritos            | Testes Funcionais |

## 2.3

| O que não será testado       



## 3. Itens a testar
| # | Item a testar | Camada | Arquivo/rota de origem |
|   | :--- | :--- | :--- |
| 1 | Validação do token JWT no middleware | Middleware | `src/middlewares/auth.js` |
| 2 | Disparo de e-mail de confirmação de inscrição | Service | `src/services/emailService.js` |
| 3 | Processamento de tarefas na fila Redis/Bull | Queue | `src/queues/notificationQueue.js` |
| 4 | Rota POST /notifications/send | Controller | `src/routes/notificationRoutes.js` |
| 5 | Validação de payload no envio de notificação | Middleware / Validator | `src/validators/notificationValidator.js` |
| 6  Atualização de preferências de notificação do usuário | Model / Service | `src/services/userService.js` |
| 7 | Renderização de templates HTML de e-mail | Utils / Helper | `src/utils/templateEngine.js` |
| 8 | Tratamento de falhas e re-tentativas no envio de e-mail | Service | `src/services/emailService.js` |
| 9 | Rota GET /notifications/history | Controller | `src/routes/notificationRoutes.js` |
| 10 | Persistência do histórico de notificações no BD | Model / Repository | `src/repositories/notificationRepository.js` |
| 11 | Sanitização de dados de entrada contra Injection | Middleware | `src/middlewares/sanitize.js` |
| 12 | Formatação de payload para Webpush/Push Notification | Service | `src/services/pushService.js` |


## 4. Análise de risco

### Tabela de Riscos (Ordenada por Risco Decrescente)
| # | Item | P | I | Risco (PxI) | Grau | Decisão | Justificativa |
| :-: | :--- | :-: | :-: | :-: | :-: | :--- | :--- |
| 3 | Processamento de tarefas na fila Redis/Bull | 4 | 5 | 20 | Crítico (C) | Mitigar | Perda de mensagens na fila gera falha de comunicação silenciosa e grave. |
| 1 | Validação do token JWT no middleware | 3 | 5 | 15 | Alto (A) | Mitigar | Falha de segurança expõe dados e rotas protegidas. |
| 8 | Tratamento de falhas e re-tentativas de e-mail | 4 | 3 | 12 | Mitigar | Falhar sem re-tentativa causa perda de notificações cruciais. |
| 2 | Disparo de e-mail de confirmação de inscrição | 3 | 4 | 12 | Alto (A) | Mitigar | Impacta diretamente a experiência do usuário e ingressos. |
| 11 | Sanitização de dados de entrada contra Injection | 2 | 5 | 10 | Alto (A) | Mitigar | Risco alto de vulnerabilidade no banco de dados. |
| 4 | Rota POST /notifications/send | 3 | 3 | 9 | Médio (M) | Mitigar | Erros no endpoint impedem a criação de avisos. |
| 10 | Persistência do histórico de notificações no BD | 2 | 4 | 8 | Médio (M) | Mitigar | Importante para auditoria e log do sistema. |
| 5 | Validação de payload no envio de notificação | 3 | 2 | 6 | Médio (M) | Mitigar | Payload inválido deve retornar erro 400 antes do processamento. |
| 6 | Atualização de preferências de notificação | 2 | 3 | 6 | Médio (M) | Aceitar | Impacto moderado na experiência; tolerável na primeira versão. |
| 12 | Formatação de payload para Push Notification | 2 | 2 | 4 | Baixo (B) | Aceitar | Canal secundário nesta fase da plataforma. |
| 9 | Rota GET /notifications/history | 2 | 2 | 4 | Baixo (B) | Aceitar | Rota apenas de consulta, não afeta o pipeline de envio. |
| 7 | Renderização de templates HTML de e-mail | 1 | 3 | 3 | Baixo (B) | Aceitar | Falhas visuais pequenas não impedem a entrega do texto. |

*Escala: P = Probabilidade (1-5), I = Impacto (1-5)  
*Graus: B (1-4), M (5-9), A (10-15), C (16-25)
*Decisões: Mitigar, Aceitar, Transferir, Evitar

### 4.2 Top 5 itens de maior risco (Prioridades de trabalho)
1. Processamento de tarefas na fila Redis/Bull (Risco: 20)
2. Validação do token JWT no middleware (Risco: 15)
3. Tratamento de falhas e re-tentativas de e-mail (Risco: 12)
4. Disparo de e-mail de confirmação de inscrição (Risco: 12)
5. Sanitização de dados de entrada contra Injection (Risco: 10)

### 4.3 Consequências assumidas para itens com decisão "Aceitar"
* **Item 6:** Assumimos que eventuais falhas na gravação de preferências farão o usuário receber notificações no padrão (default) até que edite novamente.
* **Item 12:** Assumimos que inconsistências na formatação de push afetam apenas notificações secundárias em mobile.
* **Item 9:** Assumimos que instabilidades no histórico afetam apenas a visualização do usuário, sem impactar o envio de e-mails.
* **Item 7:** Assumimos que falhas pontuais de template podem gerar e-mails com desalinhamento estético, mantendo a informação de texto.


## 5. Técnicas e níveis selecionados

| Item/camada                     | Nível(is)  | Técnica(s) | Justificativa                                                                                                 |
|---------------------------------|------------|------------|---------------------------------------------------------------------------------------------------------------|
| Fila de Notificações / Services | Integração              | Teste de Transição de Estados e Mocks | Validar troca de estados da fila (pending, processing, failed, completed).                                                                                                                                                                 |
| Middleware JWT & Sanitização    | Unitário / Componente   | Particionamento de Equivalência e Análise de Valor Limite | Garantir bloqueio de tokens expirados, malformados ou payloads maliciosos.                                                                                                                                                        |
| Endpoints REST                  | Integração (API)        | Teste de Caixa-Preta (Tabela de Decisão) | Checar status HTTP corretos (200, 400, 401, 500) segundo entradas.                                                                                                                                                                   |
| Service de E-mail               | Unitário                | Testes com Mocks / Stubs | Garantir chamadas à API de e-mail sem disparar envios reais.                                                                                                                                                                      |

### 5.1 Alterações de prioridade em relação à matriz da semana passada
Sim. A priorização do processamento da fila (Redis/Bull) subiu para Risco Crítico devido à análise de impacto de perda de dados assíncronos. A renderização visual de e-mails teve sua prioridade reduzida por ter baixo impacto na operação do serviço.


## 6. Critérios de entrada e de saída

### 6.1 Critérios de entrada
* [x] Ambiente de testes (Node.js e Jest) devidamente configurado e operacional.
* [x] Repositório clonado e dependências instaladas.
* [x] Mocks do serviço de e-mail definidos.
* [x] Banco de dados de teste isolado e pronto para migrações.

### 6.2 Critérios de saída
* [x] 100% dos 5 itens de risco Crítico e Alto (seção 4.2) cobertos por testes e passando sem falhas.
* [x] Mínimo de 80% de cobertura de código (lines/branches) nas pastas de `services` e `middlewares`.
* [x] 0 bugs críticos ou impeditivos em aberto no pipeline de CI/CD.

## 7. Ambiente e ferramentas

| Item                              | Definição                                                                                             |
|-----------------------------------|-------------------------------------------------------------------------------------------------------|
| Runtime                           | Node.js versão 22 ou superior                                                                         |
| Banco de dados de teste           | MySQL, em banco isolado para testes e preparado com as migrations do projeto                          |
| Framework de teste                | Jest (previsto; ainda não incluído nas dependências do projeto)                                       |
| Teste de endpoint                 | Supertest (previsto para testes de integração da API)                                                 |
| Serviço de e-mail nos testes      | Mailpit, como servidor SMTP local para capturar e-mails sem envio real                                |
| Variáveis de ambiente específicas | `NODE_ENV=test`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`, `SMTP_HOST` e `SMTP_PORT` |
| Onde a suíte será executada       | Localmente, na máquina de desenvolvimento, com Node.js, MySQL e Mailpit em execução                   |

## 8. Cronograma
| Etapa                                | Datas previstas       | Responsável           | Entrega                                                         |
|--------------------------------------|-----------------------|-----------------------|-----------------------------------------------------------------|
| Configuração do ambiente Jest        | 27/08/2026            | Ana Júlia Menezes     | Suíte Jest e `.env.test` operacionais                           |
| Testes unitários (services e models) | 10/09/2026            | Lara Segatello        | Cobertura unitária das regras de negócio                        |
| Banco de teste e testes de integração| 24/09/2026            | Maria Luiza Bassi     | Docker Compose e testes com BD de teste                         |
| Testes de endpoint (Supertest)       | 08/10/2026            | Maria Clara Taylor    | Cobertura de integração de rotas REST                           |
| Mocks e testes E2E                   | 22/10/2026            | Ana Júlia Menezes     | Testes fim a fim com mock de e-mail                             |
| Relatório final da formativa         | 29/10/2026            | Grupo                 | Documentação consolidada entregue                               |

*Marco Fixo:* Suíte 100% operacional no CI antes de 12/11/2026.


## 9. Papéis e responsabilidades
| Integrante                 | Responsabilidade principal              |
| -------------------------- | --------------------------------------- |
| Ana Júlia Menezes da Silva | Testes, commits e verificar código      |
| Lara Segatello Marquez     | Verificar escopos e testes básicos      |
| Maria Luiza Bassi          | Testes no insominia, e verificar códigos|
| Maria Clara Taylor         | Testes, desafios e verificar códigos    |  

### Quem é responsável por verificar que a suíte inteira está passando antes de cada entrega?
Ana Júlia Menezes da Silva

## 10. Riscos do projeto de teste

| Risco                                         | Probabilidade | Impacto | Como vamos lidar                                                      |
|-----------------------------------------------|---------------|---------|-----------------------------------------------------------------------|
| Faltas ou ausência de integrante do grupo     | 3             | 4       | Pair programming e rotação de tarefas mapeadas no cronograma.         |
| Código legado/existente difícil de testar     | 4             | 4       | Separar 1 sprint para pequenas refatorações (injeção de dependência). |
| Ambiente de CI inconsistente (Flaky tests)    | 2             | 3       | Uso de containers isolados e resets de estado antes de cada teste.    |
| Concentração de conhecimento em uma só pessoa | 3             | 4       | Documentação no Readme e alinhamentos diários de 5 minutos.           |










