O que essa rota faz?

A rota:

POST http://localhost:3000/eventos/1/banner

serve para enviar uma imagem para um evento.

Nesse caso:

POST = enviar dados
/eventos/1/banner
eventos → tabela/model de eventos
1 → ID do evento
banner → imagem do evento

Ou seja:

“Envie uma imagem para o evento de ID 1.”

Como o backend recebe a imagem?

Normalmente isso é feito com o middleware multer.

Exemplo:

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

O Multer:

recebe arquivos
salva na pasta uploads
cria informações sobre o arquivo enviado
Explicando o teste no Postman
1. Selecionar método POST

No Postman:

POST http://localhost:3000/eventos/1/banner
Por que POST?

Porque estamos ENVIANDO um arquivo.

Métodos:

GET → buscar
POST → criar/enviar
PUT → atualizar
DELETE → deletar
2. Ir na aba Body

No Postman existe:

Params
Authorization
Headers
Body

Você vai em:

Body

porque o arquivo será enviado no corpo da requisição.

3. Escolher form-data

Muito importante.

Arquivos NÃO podem ser enviados em JSON normal.

Então usamos:

form-data

Isso cria um formulário parecido com upload de sites.

4. Criar o campo banner

Você adiciona:

Key	Tipo	Value
banner	File	imagem
Por que o nome precisa ser banner?

Porque no backend provavelmente existe algo assim:

upload.single('banner')

ou:

req.file

Então:

o backend espera um campo chamado banner
se colocar outro nome, não funciona
5. Selecionar tipo File

No Postman:

ao lado da key existe um seletor
troque de Text para File

Depois:

escolha uma imagem do computador
6. Clicar em Send

Quando clicar:

Send

o Postman envia:

a imagem
o nome do campo
os dados multipart/form-data

para o servidor.

O que acontece no backend?

Fluxo completo:

Postman
   ↓
Express Route
   ↓
Multer recebe arquivo
   ↓
Arquivo salvo em /uploads
   ↓
Nome salvo no banco
   ↓
Resposta enviada
Resposta esperada

A imagem mostra:

{
  "mensagem": "Banner atualizado com sucesso",
  "banner": "/uploads/1693456789-123456789.jpg"
}
Explicando essa resposta
mensagem
"mensagem": "Banner atualizado com sucesso"

significa:

upload funcionou
imagem salva corretamente
banner
"banner": "/uploads/1693456789-123456789.jpg"

é o caminho da imagem salva.

Por que o nome fica estranho?

Porque normalmente o Multer gera nomes únicos.

Exemplo:

1693456789-123456789.jpg

Isso evita:

conflitos
sobrescrever arquivos
Como visualizar a imagem?

No navegador:

http://localhost:3000/uploads/nome-do-arquivo.jpg

Exemplo real:

http://localhost:3000/uploads/1693456789-123456789.jpg
O que precisa existir no Express?

Você precisa liberar a pasta uploads:

app.use('/uploads', express.static('uploads'));

Isso faz:

o navegador acessar arquivos da pasta uploads

Sem isso:

a imagem não abre
Exemplo completo da rota
Configuração do multer
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

module.exports = upload;
Rota
const express = require('express');
const router = express.Router();

const upload = require('../middlewares/upload');

router.post(
  '/eventos/:id/banner',
  upload.single('banner'),
  async (req, res) => {

    const evento = await Evento.findByPk(req.params.id);

    evento.banner = `/uploads/${req.file.filename}`;

    await evento.save();

    res.json({
      mensagem: 'Banner atualizado com sucesso',
      banner: evento.banner
    });
  }
);
Explicando linha por linha
upload.single('banner')

Significa:

“Receba UM arquivo no campo banner”

req.file

Contém informações do arquivo:

req.file.filename

nome gerado

req.file.originalname

nome original

req.file.path

caminho

Salvando no banco
evento.banner = `/uploads/${req.file.filename}`;

Agora o evento guarda:

o caminho da imagem
Salvando definitivamente
await evento.save();

grava no banco.

Possíveis erros comuns
1. Cannot POST

Rota errada.

2. req.file undefined

Normalmente:

nome do campo diferente de banner
esqueceu form-data
3. ENOENT uploads

A pasta uploads não existe.

Crie:

/uploads

na raiz do projeto.

4. Imagem não abre no navegador

Faltou:

app.use('/uploads', express.static('uploads'));
Resumo geral
O Postman envia:
imagem → campo banner
O Multer:
recebe → salva → gera nome
O Express:
atualiza evento → salva caminho
O navegador:
acessa /uploads/arquivo.jpg

para visualizar a imagem. 