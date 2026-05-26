# Relatório Técnico — API de Notificações
**Grupo:** 07
**Membros:** Ana Júlia Menezes, Lara Segatello, Maria Clara Taylor e Maria Luiza Bassi.
**Data:** 21/05/2026

---

## 1. Introdução
### 1.1 Objetivo do Projeto
O objetivo deste projeto é o desenvolvimento do back-end para uma plataforma de gerenciamento de eventos online, inspirada em grandes soluções de mercado como Sympla e Eventbrite. O sistema foi concebido para atuar como o núcleo de processamento que permite aos organizadores a criação e gestão de eventos, enquanto oferece aos participantes uma interface funcional para inscrições e acompanhamento de atividades. 
A necessidade deste projeto reside na automação e organização do fluxo de informações entre a plataforma e o usuário final. O foco central do desenvolvimento é o Módulo de Notificações por E-mail, essencial para garantir que o participante receba confirmações imediatas de sua inscrição, lembretes estratégicos antes da realização do evento e para manter um histórico rastreável de todas as comunicações enviadas. 

### 1.2 Escopo
Todos os sistemas estão incluídos de maneira funcional e inclusivos, desta maneira todos os participantes podem realizar suas inscrições em eventos online gerenciados, porém em nosso projeto ocorreram alguns erros no processo sistêmico, então os participantes não podem criar inscrições e receberem notificações via e-mail para o acompanhamento, contudo tais processos estão em resolução e logo serão resolvidos e o site será imersivo e funcional com o back-end. 

---

## 2. Tecnologias Utilizadas
| Tecnologia                 | Versão    | Justificativa |
| -------------------------- | -------------| --------------------------- |

| Node.js                    | v18+         | O Node.js foi utilizado pois permite a comunicação do servidor com o banco de dados criando  APIs (Conjunto de regras    protocolos que permite que diferentes sistemas e softwares conversem entre si.) em tempo real. |

| Express.js                 | 4.x          |Utilizamos o  Express.js, pois ele é o principal framework para Node.js. Ele é utilizado para criar servidores web e construir APIs de forma rápida. Em vez de escrever códigos longos e complexos, usamos o Express para gerenciar rotas de URL, requisições HTTP e segurança com facilidade.|

| MySQL                     | 8.0          | O MySQL foi utilizado para o banco de dados, onde todas as informações, eventos, ids e dados que não poderiam ser perdidos eram enviados. Armazenando todos os dados do projeto, para que os mesmos não fossem perdidos. |

| Sequelize                | 6.x           | O Sequelize foi utilizado para exportar partes do código, gerando o funcionamento do mesmo, mapeando as tabelas do MySQL. |

| Insominia               | 12.x         | O Insominia foi  fundamental para o teste de funcionalidade do projeto, aqui aconteciam os teste para analise do projeto, testando se o código estava de acordo com o que deveríamos receber.  |
|Visual Studio Code|  1.12x      | O Visual Studio Code foi a base de tudo, onde o código do projeto foi desenvolvido, sendo importantíssimo para o projeto. |

|Live Share               |  1.1.x        | O Live Share foi utilizado durante todo o processo do projeto. Durante o projeto tarefas e funções foram definidas e separas no grupo e um computador foi escolhido para ser a base de tudo no Visual Studio Code. Este computador base tinha acesso ao link do Live Share, o qual era compartilhado com os outros participantes, para que os mesmos conseguissem ter acesso ao Visual Studio Code para editar, fazer e alterar códigos todos juntos, dando andamento no projeto.   |

|Github                     |   3.5.7       | O Github foi utilizado para que o projeto tivesse um repositório, o qual foi e ainda está sendo utilizado para subir os dados do projeto, permitindo que outras pessoas tenham acesso e observem o que foi feito, como pastas, arquivos, códigos, imagens e outros. Lembrando sempre que arquivos privados onde estão inseridos senhas e outros dados confidências do projeto não devem aparecer no repositório.|
---

## 3. Arquitetura do Sistema
### 3.1 Diagrama de Classes
[Referência ao diagrama UML em docs/]
A estrutura do sistema foi concebida inicialmente para com modularidade e escalabilidade, adotando a arquitetura MVC (Model-View-Controller). 
O diagrama de classes, localizado em docs/diagrama-classes.png, apresenta as entidades principais do sistema — por exemplo, Evento, Participante e Inscrição — assim como suas interações. Cada classe contém atributos e métodos particulares que espelham as funcionalidades disponibilizadas pela API.

### 3.2 Arquitetura em Camadas
[Descreva brevemente: Routes → Controllers → Services → Models → MySQL]
A arquitetura em camadas do sistema é composta por Routes, Controllers, Services e Models.
 Os Routes são rotas do sistema que definem os endpoints da API e encaminham as requisições aos controllers de maneira apropriada. Os Controllers reúnem a lógica de controle e  recepcionam as chamadas das rotas para enfim procesarem os dados e efetuam a interação com os serviços (Services). Os Services agrupam a lógica de negócio, executando tarefas como validação de entrada, manipulação de entidades e comunicação com os modelos (Models).  Os models especificam a estrutura dos dados e a forma de interação com o banco, empregando o Sequelize para mapear as tabelas do MySQL.


### 3.3 Banco de Dados

[Quantas tabelas, relacionamentos principais]
Os relacionamentos principais do Banco de Dados do Projeto Notificações-Api-Grupo7 são Tabela Eventos gerenciados para melhor acesso de participantes e maiores inscrições geradas a partir de tais . Tabela participantes com o intuito de que suas navegações sejam proveitosas e positivas em relação ao desempenho do projeto qualificado. Tabela Inscrições trazendo o gerenciamento e a criação das novas inscrições para a entrada e acompanhamento de eventos por participantes. Tabela Notificações apresenta as notificações do sistemas incluindo fatores que derivam de outras tabelas como participantes, inscrições e eventos.
A partir deste dados armazenados o sistema versionado traz um funcionamento eficaz e funcional, com passagens diretas de confirmação de informações e correção de erros de maneira mais rápida e segura. 
---

## 4. Funcionalidades Implementadas
| Funcionalidade                    | Status        | Bloco PBE |
| --------------------------------- | -----------   | --------- |
| CRUD de Eventos                   | ✅ Completo   | 1 e 3    |
| CRUD de Participantes             | ✅ Completo   | 1 e 3    |
| Inscrições                        | ✅ Completo   | 1 e 3    |
| Middlewares e tratamento de erros | ✅ Completo   | 2        |
| Validação de dados                | ✅ Completo   | 2        |
| Persistência MySQL                | ✅ Completo   | 3        |
| Exportação JSON/XML               | ✅ Completo   | 3        |
| Upload de arquivos                | ✅ Completo   | 3        |
| Notificações por e-mail           | 🔴 Incompleto | 4        |
| Deploy                            | ✅ Completo   | 5        |
| Documentação Swagger              | ✅ Completo   | 5        |

---

## 5. Processo de Desenvolvimento
### 5.1 Metodologia
[Ágil com sprints de 2 semanas, Kanban no GitHub Projects]
A equipe adotou uma metodologia ágil, organizando o trabalho em sprints de 2 semanas. Utilizamos o Kanban no GitHub Projects para acompanhar o progresso das tarefas, com colunas para "To Do", "In Progress" e "Done". As reuniões de planejamento e retrospectiva foram realizadas ao final de cada sprint para ajustar o processo conforme necessário.
### 5.2 Divisão de Trabalho
[Quem fez o quê — referência à matriz RACI]
A divisão de trabalho foi organizada com base nas habilidades e interesses de cada membro da equipe. Maria Clara ficou responsável pelo desenvolvimento dos endpoints de eventos e participantes, Lara cuidou das inscrições e middlewares, Ana Júlia trabalhou na persistência com MySQL e exportação de dados, manipulando a máquina principal usada de base, enquanto Maria Luiza focou nas notificações por e-mail e documentação Swagger. A matriz RACI foi utilizada para garantir clareza nas responsabilidades de cada tarefa. As principais responsáveis pelos desafios foram Lara e Maria Clara.

### 5.3 Controle de Versão
[Quantos commits, como organizaram branches]
O projeto contou com 23 commits ao todo, distribuídos conforme as exigências de cada aula. Optamos por realizar commits de integração ao final de cada etapa para garantir que a versão enviada ao repositório estivesse sempre estável e testada



---
## 6. Desafios e Soluções
| Desafio                          | Como resolvemos                                               |
| -------------------------------  | ------------------------------------------------------------- |
| Servidor travou (Live Share)     | Reiniciamos o servidor                                        |
| Insominia deu erro               | Analisamos o que estava errado e fechamos e abrimos novamente | 
| Comunicação oscilando            | Buscamos resolver de modo profissional                        |
| Falta de compreensão nos comandos| Investigação com o professor e colegas do grupo               | 

---

## 7. Lições Aprendidas
Maria Clara: Mesmo diante de obstáculos técnicos e prazos, a capacidade da equipe de dialogar e colocar as questões pendentes em dia transformou os desafios em oportunidades de aprendizado. O resultado foi um processo de desenvolvimento fluido e uma experiência de grupo extremamente proveitosa.
Ana Júlia: Aprendi a importância de uma boa organização e comunicação dentro da equipe, especialmente ao trabalhar com metodologias ágeis. A divisão clara de responsabilidades e o uso de ferramentas como o GitHub Projects foram essenciais para manter o projeto no caminho certo. Além disso, enfrentamos desafios técnicos que nos ensinaram a ser mais flexíveis e a buscar soluções criativas, como lidar com conflitos de merge e otimizar o uso do Sequelize para melhorar a performance da API.
Maria Luiza: Durante o projeto aprendi a importância de uma boa comunicação. Sem a comunicação a equipe não estava conseguindo desenvolver o projeto, e após longas conversas conseguimos superar obstáculos. Reforçando a importância de compartilhar dúvidas e dificuldades. 
Lara: Durante o processo do projeto eu aprendi que é necessário uma boa comunicação, além de uma organização para que o projeto atinja seu objetivo de maneira segura e eficiente. Aprendi a necessidade da atenção e muitos recursos e processos que foram interessantes e  mudaram parte do meu pensamento em relação ao curso. Aprendi que há necessidade de seguir da maneira correta e que as vezes os erros são enormes porém podemos resolver com calma e apartir de procedimentos com a união do grupo. E aprendi que não devemos desistir apesar da dificuldade apresentada e do código proposto.

---

## 8. Próximos Passos (se o projeto continuasse)
Caso houvesse maior disponibilidade de tempo, a equipe focaria nos seguintes pilares para evoluir o sistema:
Desenvolvimento do Front-end: Criação de uma interface visual completa para integrar as rotas da API e oferecer uma experiência real ao usuário. 
Qualidade e Testes: Criar testes automáticos para garantir que o envio de e-mails e o cadastro de eventos não apresentem erros.
Organização e Gestão: Refinamento da metodologia de trabalho e da documentação técnica para otimizar a manutenção do código.
Novas Funcionalidades: Adicionar login para usuários e notificações via SMS ou celular.


## 9. Referências
- [Documentação do Express.js](https://expressjs.com/)
- [Documentação do Sequelize](https://sequelize.org/)
- [Documentação do Nodemailer](https://nodemailer.com/)
