Nomes: Ana Júlia Menezes, Lara Segatello, Maria Clara Taylor e Maria Luiza Bassi.

# PARTE 1 - MATRIZ TÉCNICA X CAMADA

## AUTENTIFICAÇÃO

Camada / grupo de rotas: AUTENTIFICAÇÃO
Regressão: Alta
Segurança: Alta
Recuperação: Fora do escopo
Performance: Baixa 
Estresse: Fora do escopo
Paralelo: Média
Justificativa: Regressão (ALTA): Garante que alterações no código não quebrem o fluxo de login e geração de tokens, que impactam o sistema todo.
Segurança (ALTA): Porta de entrada da aplicação. Falhas aqui expõem credenciais e permitem acesso indevido.
Recuperação / Estresse (FORA DO ESCOPO): Foco em testes funcionais e de segurança na UC; a infraestrutura de autenticação não demanda testes de queda controlada ou carga extrema neste momento.

## NOTIFICAÇÕES 

Camada / grupo de rotas: NOTIFICAÇÕES
Regressão: Alta
Segurança: Média
Recuperação: Fora do escopo
Performance: Baixa
Estresse: Fora do escopo
Paralelo: Baixa
Justificativa: Regressão (ALTA): É o core do módulo; regredir a criação e listagem de notificações compromete o valor principal da entrega.
Recuperação / Estresse (FORA DO ESCOPO): Exige ambientes simulados de alta carga fora da restrição de tempo do projeto.

## Eventos 

Camada / grupo de rotas: EVENTOS
Regressão: Média 
Segurança: Média
Recuperação: Fora do escopo
Performance: Baixa
Estresse: Fora do escopo
Paralelo: Baixa 
Justificativa: Recuperação / Estresse (FORA DO ESCOPO): Escopo funcional simples de CRUD, sem criticidade de tempo real que exija tolerância a falhas pesada.

## Participantes / Inscrições 

Camada / grupo de rotas: PARTICIPANTES / INSCRIÇÕES 
Regressão: Alta
Segurança: Alta
Recuperação: Fora do escopo
Performance: Média
Estresse: Fora do escopo
Paralelo: Fora do escopo
Justificativa: Regressão (ALTA): Regra de negócio crítica (inscrição/cancelamento) que sofre alterações frequentes.
Segurança (ALTA): Exige token e precisa impedir que um usuário inscreva outro ou acesse dados de terceiros. Maior risco de acesso indevido do módulo. 
Recuperação / Estresse / Paralelo (FORA DO ESCOPO): Foco em garantir controle de acesso antes de analisar concorrência extrema de inscrições.

## ENVIO DE E-MAIL(NODEMAILER/MAILPIT)

Camada / grupo de rotas: ENVIO DE E-MAIL(NODEMAILER/MAILPIT) 
Regressão: Média
Segurança: Média
Recuperação: Fora do escopo
Performance: Alta
Estresse: Fora do escopo
Paralelo: Média
Justificativa: Performance (ALTA): Disparos de e-mail são assíncronos e podem gargalar a aplicação caso a fila/envio seja lento.
Recuperação / Estresse (FORA DO ESCOPO): O MailPit é uma ferramenta de mock em ambiente de desenvolvimento, não sendo adequado para estresse real.

## CAMADA DE DADOS (MODELS + MYSQL)

Camada / grupo de rotas: CAMADA DE DADOS (MODELS + MYSQL)
Regressão: Alta
Segurança: Média
Recuperação: Fora do escopo
Performance: Média
Estresse: Fora do escopo
Paralelo: Fora do escopo
Justificativa:Regressão (ALTA): Alterações em queries e models podem quebrar a persistência e corromper dados de múltiplos módulos.
Recuperação / Estresse / Paralelo (FORA DO ESCOPO): Foco em integridade e transações via testes de unidade/integração, dispensando simulação de falhas de hardware/rede.



# Parte 2.1 - Escopo: o que fica dentro
|Técnica	      | Ferramenta prevista                                            | Em que nível será aplicada                        |
|-----------------|----------------------------------------------------------------|---------------------------------------------------|
|Regressão Jest   | Supertest	                                                   | Todos os níveis (Unitário, Integração e Endpoint) |
|Segurança Jest   | Supertest	                                                   | Endpoint e Integração                             |
|Recuperação      |Docker CLI (para derrubar e subir containers do MySQL e MailPit)|Integração / Endpoint                              |

# Parte 2.2

| Técnica  | Motivo                                   |
| -------- | ---------------------------------------- |
| Estresse | Falta de ferramenta e falta de requisito |
| Paralelo | Falta de ferramenta                      |
| || Paralelo | Falta de ferramenta

# Parte 2.3

### Teste de Estresse:

O projeto aceita o risco de indisponibilidade total ou degradação severa do sistema durante picos imprevistos de carga, por desconhecer o limite máximo de suporte da infraestrtura e sua capacidade de autorrecuperação.

### Teste de Concorrência/Paralelo:

O projeto aceita o risco de corrupção ou inconsistência de dados no banco, race conditions e bloqueios de transação (deadlocks) ao processar múltiplas requisições simultâneas sobre os mesmos recursos.



## Parte 3 - Verificação de segurança

# |  O que verificar                                                        | Nível      | Resiltado esperado                     |
--|-------------------------------------------------------------------------|------------|----------------------------------------|
1 | Verificar se o endpoint de login retorna 401 para credenciais inválidas | Endpoint   | Retorna 401 Unauthorized               |
2 | Verificar se o endpoint de login retorna 200 para credenciais válidas   | Endpoint   | Retorna 200 OK                         |
3 | Verificar se o token JWT é gerado corretamente após login               | Endpoint   | Token JWT válido retornado             |
4 | Verificar se o token JWT é armazenado corretamente no banco de dados    | Integração | Token JWT armazenado no banco de dados |




## Parte 4 - Regressão no calendário

### 4.1 Em que momentos o grupo vai rodar a suíte completa? (Ex.: antes de cada commit? no fim de cada aula? antes de cada entrega?) 

Antes de cada entrega, para a verificação do fluxo e status de entrega rodamos a suite completa e damos o commit, geralmente ocorrendo no fim das aulas ou finalização de atividades (projetos).

### 4.2 Quem no grupo é responsável por verificar que a suíte está passando antes de uma entrega?
Ana Júlia Menezes da Silva

### 4.3 O que o grupo faz se, na véspera de uma entrega, a suíte acusar falha em um teste que antes passava? Escrevam a regra agora, com calma — não na hora do desespero.

Tentamos resolver juntas, analisando cada detalhe até acharmos o erro, sem acusações somente aprendendo trabalhar em equipe a cada dia. 





