# Relatório de Bugs

### Bug 1 — [EventoController.js](src/controllers/EventoController.js) — `require` faltando

As funções `validar`, `isRequired`, `minLength` e `isPositiveInteger` são usadas a partir da linha 28, mas nunca foram importadas no topo do arquivo. Precisa adicionar:
```js
const { isRequired, isPositiveInteger, minLength, validar } = require("../helpers/validators");
```

---

### Bug 2 — [InscricaoController.js](src/controllers/InscricaoController.js) — Nomes errados no `module.exports`

As funções exportadas têm nomes diferentes do que as rotas esperam:

| Rota chama | Controller exporta |
|---|---|
| `InscricaoController.store` | `criar` |
| `InscricaoController.index` | `listarTodas` |

**Solução:** Renomear as funções exportadas para `store` e `index`, ou corrigir o `module.exports` para mapear os nomes certos:
```js
module.exports = { store: criar, index: listarTodas, listarPorEvento, cancelar };
```

---

### Bug 3 — [ParticipanteService.js](src/services/ParticipanteService.js) — 4 erros

**Linha 8:** Nome do arquivo errado no `require`:
```js
// ERRADO:
require("../helpers/validation")
// CORRETO:
require("../helpers/validators")
```

**Linha 6:** Typo no nome da função importada:
```js
// ERRADO:
minLenght,
// CORRETO:
minLength,
```

**Linha 30:** Typo no nome da função chamada:
```js
// ERRADO:
minLegth(nome, 2, "Nome"),
// CORRETO:
minLength(nome, 2, "Nome"),
```

**Linha 64:** Typo no nome da variável:
```js
// ERRADO:
if (!deltado) {
// CORRETO:
if (!deletado) {
```

---

### Bug 4 — [app.js](src/app.js) — Rota `/participantes` nunca registrada

O arquivo [newFile.js](src/newFile.js) até tenta registrar a rota, mas ele **nunca é importado** por nenhum arquivo, então não tem efeito. As duas linhas abaixo precisam ser adicionadas em `app.js`, junto com as outras rotas:

```js
const participanteRoutes = require("./routes/participanteRoutes");
app.use("/participantes", participanteRoutes);
```

---

### Bug 5 — [app.js:6](src/app.js) — `exports.app` sobrescrito (linha 6 vs linha 44)

A linha 6 faz:
```js
exports.app = app; // ← adiciona { app } ao objeto de exports
```
Mas a linha 44 faz:
```js
module.exports = app; // ← SUBSTITUI tudo, apaga o { app } acima
```

Resultado: `const { app } = require("./app")` em `newFile.js` retorna `undefined`. A linha 6 é **código morto** e deve ser removida.

---

São 5 problemas no total (com 4 sub-erros no `ParticipanteService.js`). Se quiserem testar depois de corrigir, é só rodar `npm start` e verificar se todas as rotas respondem!
