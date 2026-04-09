# WBS — API de Notificações
## 1. Planejamento
- 1.1 Levantamento de requisitos: 
    -> Trazer sistema de notificações funcional e acessível;
    -> Sistemas de controles dos dados do evento e participante;
    -> Sistema de erros validado que se apresentam de modo fácil para melhor entendimento;
    -> Sistema versionado com integração fácil e rápida;
- 1.2 Diagrama de classes UML
    -> ![alt text](<Captura de tela 2026-03-03 135610.png>);
- 1.3 Definição de tecnologias
    -> Vs Code;
    -> Live Share;
- 1.4 Configuração do ambiente
        -> Tudo instalado:
            -> Vs Code;
            -> My SQL;
            -> Node.js;
            -> LiveShare;
            -> Entre Outros;
## 2. Desenvolvimento — Base
- 2.1 Estrutura MVC do projeto 
    ->Model(dados);
    ->View (visual);
    ->Controller(lógica);
    ->errors(erros);
    ->helpers(validar o erro);
    -> Middlewares(modifica a requisição, valida dados, bloqueia acessos e executa lógica antes de chegar na rota.);
- 2.2 CRUD de Eventos
    -> Criar, Ler, Editar, Deletar e Atualizar arquivos;
- 2.3 CRUD de Participantes
    -> Mesma coisa, mas para gerenciar usúarios;
- 2.4 Inscrições
    -> Participante se inscreve em evento;
- 2.5 Middlewares e tratamento de erros
    -> Código que roda no meio (validação) ;
- 2.6 Camada de Services
    -> Onde fica a lógica principal;
- 2.7 Validações
    -> Campo do nome obrigatório,E-mail válido, Fatores válidos ou inválidos;
## 3. Desenvolvimento — Persistência
- 3.1 Configuração do MySQL -> banco de dados;
- 3.2 Models Sequelize -> ferramenta pra usar o banco;
- 3.3 Migrations e Seeds -> criar tabelas automaticamente;
- 3.4 Migração do CRUD para banco -> salvar dades de verdade;
- 3.5 Upload de arquivos -> enviar imagens/docs;
- 3.6 Exportação JSON/XML -> gerar arquivos;
- 3.7 Cache -> deixar osistema mais rápido;
## 4. Desenvolvimento — Notificações
- 4.1 Configuração do Nodemailer -> enviar email;
- 4.2 Templates de e-mail -> modelo de mansagem;
- 4.3 Envio de confirmação ->e-mail quando se inscreve;
- 4.4 Envio de lembretes -> avisar antes do evento;
- 4.5 Histórico de notificações -> guardar envios;
## 5. Finalização
- 5.1 Documentação Swagger completa -> Documentação Completa;
- 5.2 Testes finais -> ver se tudo está funcionando da maneira correta;
- 5.3 Deploy -> colocar online o sistema;
- 5.4 README e documentação -> explicar o projeto;
- 5.5 Apresentação -> mostrar para o professor o projeto.