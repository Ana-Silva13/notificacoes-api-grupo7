# Auditoria de Qualidade — Sprint 2
**Data:** 14-05-2026
**Revisores:** Lara (Revisou código e documentação), Ana Júlia (Revisou testes e validações), Maria Clara (Revisou tratamento de erros e Git), Maria Luiza (Revisou organização e Swagger)
## Checklist de Qualidade
### Organização
- [☑️] Estrutura de pastas segue o padrão MVC + Services
- [☑️] Imports organizados (externos primeiro, internos depois)
- [☑️] Nomes de variáveis e funções são claros e consistentes
### Tratamento de Erros
- [☑️] Todos os controllers usam try/catch + next(erro)
- [☑️] Erros retornam formato padronizado
- [☑️] Erros do Sequelize são tratados no errorHandler
### Validações
- [☑️] Todas as rotas POST/PUT têm validação
- [☑️] E-mails são validados
- [☑️] IDs são parseados corretamente
### Documentação
- [☑️] Swagger cobre todas as rotas atuais
- [☑️] README está atualizado
- [☑️] .env.example tem todas as variáveis
### Git
- [☑️] Todos os membros têm commits recentes
- [☑️] Mensagens de commit são descritivas
- [☑️] .gitignore está correto
## Dívidas Técnicas Encontradas

| #  | Descrição                                                    | Arquivo                                     | Prioridade | Responsável |
| ---| ------------------------------------------------------------ | ------------------------------------------- | ---------  | ----------- |
| 1  | Palavras ou termos em locais inapropriados                   | Controllers/, Services/ e pequenos arquivos | Alta       | Todas       |
| 2  | testes com informações erradas ou desconhecidas              | Insomnia                                    | Alta       | @lara, @ana | 
| 3  | confusão ou esquecimento de requerimentos perante o código   | Todos                                       | Alta       | Todas       |
| 4  | presença de erros de rota imperceptíveis                     | Routes/                                     | Alta       | Todas       | 