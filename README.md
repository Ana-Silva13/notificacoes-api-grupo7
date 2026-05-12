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

