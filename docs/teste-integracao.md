# Teste de Integração — Bloco 4

**Data:26/05/2026**

**Testador: Ana Júlia Menezes/Todas** 

| Id| Teste                              | Resultado |                                                                 
|---|------------------------------------|-----------|                                                                          
| 1 | GET /eventos (seed)                | ✅        |                                                                           
| 2 | POST /eventos                      | ✅        |                                   
| 3 | POST /participantes                | ✅        |                                                                
| 4 | POST /inscricoes                   | ✅        | 
| 5 | Abrir MailPit no navegador         | ✅        |
| 6 | GET /notificacoes                  | ✅        | 
| 7 | POST /inscricoes                   | ✅        | 
| 8 | PATCH /inscricoes/:id/cancelar     | ✅        | 
| 9 | Abrir MailPit                      | ✅        | 
| 10 |GET /notificacoes/estatisticas     | ✅        | 
| 11| POST /notificacoes/1/reenviar      | ❌        | 
| 12 | GET /exportar/eventos/xml         | ✅        | 
| 13 | GET /exportar/eventos/xml         | ✅        | 
| 14 |POST /eventos/2/banner (form-data) | ✅        |
| 15 | GET /api-docs                     | ✅        |
| 16 | Ctrl+C + npm run dev              | ✅        | 
| 17 | GET /eventos                      | ✅        |

Observações: 

1 →  Listou todos os eventos seed de maneira efetiva e estruturada
2 → Criar um evento novo, a partir de dados de um novo evento
3 → Criar participante com dados referentes a tal comando
4 → Uma inscrição inscrita no evento, a partir do fornecimento de um eventoId e o participanteId
5 → Verificação de um e-mail enviado
6 → Verificar notificação no banco, quantidade e segurança 
7 →  Tentar duplicar uma inscrição
8 → Cancelamento de uma inscrição efetivada
9 → Verifica um e-mail de cancelamento da inscrição para um evento
10 → Ver as estatísticas para cada notificação de cada evento
11 → Deu errado,porque não tem como reenviar as notificações se elas não existem.
12 → Exportação de eventos para XML
13 → Exportar relatório de eventos 
14 → Realizado um upload do banner
15 → Completar de maneira eficiente o swagger
16 → Reiniciar o servidor para verificação de todos os comandos e criações de modo efetivo.
17 → Uma listagem completa de eventos direcionados 

**Problemas encontrados:**

- Reenvio de notificações da API, pois não existem APIs verificadas no sistema 

**Correções feitas:**

- Partes em falta, com revisão de códigos e instrução do professor achamos erros em um module que n deveria estar exportado, erros como status mal formulada e esquecimento de linhas e comando específicos do código.






 **TESTES DO INSOMNIA:**

type: collection.insomnia.rest/5.0
schema_version: "5.1"
name: Notificação de Api- grupo 7
meta:
  id: wrk_fbc6a4d8cbda400a96660bd79e7d12a8
  created: 1760718333033
  modified: 1778515807638
  description: ""
collection:
  - name: 15 aula
    meta:
      id: fld_0709e4f32079438aacc4323c9afe486a
      created: 1777564114115
      modified: 1777564114115
      sortKey: -1777564114115
      description: ""
  - name: "Aula  16 "
    meta:
      id: fld_b7e4fd631f6e49b0b0da2b949738b588
      created: 1777566761130
      modified: 1777566761130
      sortKey: -1777566761130
      description: ""
    children:
      - name: Teste 3
        meta:
          id: fld_35022ec1c0e14cafb6194582cff7521b
          created: 1777572558228
          modified: 1777572558228
          sortKey: -1777572558228
          description: ""
  - name: Aula 17
    meta:
      id: fld_605a0efddbbf4eaf99f5bb5b895b15df
      created: 1777978357107
      modified: 1777978357107
      sortKey: -1777978357107
      description: ""
    children:
      - name: "Parte 1 "
        meta:
          id: fld_bce140c3157e4ce9a64c1bc88c6c7d17
          created: 1777979455824
          modified: 1777979455824
          sortKey: -1777979455824
          description: ""
      - name: Parte 3
        meta:
          id: fld_d6e9e226b2484bd3a6bd060ef8b4e752
          created: 1777979833289
          modified: 1777979833289
          sortKey: -1777979833289
          description: ""
      - name: Desafio
        meta:
          id: fld_d593c70e67794af1a14029f8465e3690
          created: 1777980648448
          modified: 1777980648448
          sortKey: -1777980648448
          description: ""
  - name: Aula 18
    meta:
      id: fld_075373e4c2b24bbfaea80cda694e55c4
      created: 1777988359050
      modified: 1777988359050
      sortKey: -1777988359050
      description: ""
  - name: Aula 19
    meta:
      id: fld_68d69b871372403f900ed70db9e050a1
      created: 1778517335086
      modified: 1778517335086
      sortKey: -1778517335086
      description: ""
  - name: Aula 20
    meta:
      id: fld_99339047b31640e9b18b5c25bfa78bf7
      created: 1778584458963
      modified: 1778584458963
      sortKey: -1778584458963
      description: ""
    children:
      - name: "Participantes "
        meta:
          id: fld_a096535d7d244980be0f89c173d33904
          created: 1778585004741
          modified: 1778585004741
          sortKey: -1778585004741
          description: ""
      - name: inscrições
        meta:
          id: fld_71d797e9a01f4a71817291ad23c26ae7
          created: 1778585655942
          modified: 1778585655942
          sortKey: -1778585655942
          description: ""
      - name: "Exportação e Relatórios "
        meta:
          id: fld_4be5fad0a8324218b78eb235a18882f2
          created: 1778586367044
          modified: 1778586367044
          sortKey: -1778586367044
          description: ""
      - name: "Infraestrutura "
        meta:
          id: fld_c8be5f1eb3e040298ba0c90acc9a6a03
          created: 1778586551620
          modified: 1778586551620
          sortKey: -1778586551620
          description: ""
      - name: Eventos
        meta:
          id: fld_60b65412b6c643ab99bcfe24bed2e2fa
          created: 1778586962447
          modified: 1778586962447
          sortKey: -1778586962447
          description: ""
  - name: "Primeiras aulas "
    meta:
      id: fld_2112a00151044ffeb27734bd13488d92
      created: 1778587075219
      modified: 1778587075219
      sortKey: -1778587075219
      description: ""
  - name: Aula 21
    meta:
      id: fld_52f6e786591a4b18a8976bed3f203d31
      created: 1778782509852
      modified: 1778782509852
      sortKey: -1778782509852
      description: ""
    children:
      - name: Entendendo o fluxo completo
        meta:
          id: fld_9fcd4294e36c470c87e2b1a85bd19c0a
          created: 1778783000882
          modified: 1778783000882
          sortKey: -1778783000882
          description: ""
  - name: Aula 22
    meta:
      id: fld_07497de070154878aa485f743800c4c7
      created: 1779190092838
      modified: 1779190092838
      sortKey: -1779190092838
      description: ""
  - name: Aula 23
    meta:
      id: fld_3f42d3d7da824bccbd7f74d175c777ed
      created: 1779381345225
      modified: 1779381345225
      sortKey: -1779381345225
      description: ""
  - name: Aula 24
    meta:
      id: fld_9a9eefe867d843809653079ac5e55973
      created: 1779793348141
      modified: 1779793348141
      sortKey: -1779793348141
      description: ""
  - name: Aula 25
    meta:
      id: fld_68ba7fddd4ce48cdbac5e22c9b150786
      created: 1779802284648
      modified: 1779802284648
      sortKey: -1779802284648
      description: ""
    children:
      - url: http://localhost:3000/eventos
        name: "1"
        meta:
          id: req_7663848c8c5a4846896c2f982e49c9be
          created: 1779802288428
          modified: 1779802370760
          isPrivate: false
          description: ""
          sortKey: -1779802288428
        method: GET
        headers:
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/eventos
        name: "2"
        meta:
          id: req_daa828a5ff5c4555a3c1ba782e5b4438
          created: 1779802371671
          modified: 1779802450842
          isPrivate: false
          description: ""
          sortKey: -1779802371671
        method: POST
        body:
          mimeType: application/json
          text: |-
            {
            	"id": 4,
            	"nome": "Evento5",
            	"descricao": "g7",
            	"data": "2026-05-11",
            	"local": "SENAI",
            	"capacidade": 80
            }
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/participantes
        name: "3"
        meta:
          id: req_41dd0bf937924788a3ba6c2fa1496d11
          created: 1779802451714
          modified: 1779802557959
          isPrivate: false
          description: ""
          sortKey: -1779802451714
        method: POST
        body:
          mimeType: application/json
          text: |-
            {
            	"id": 4,
            	"nome": "G7",
            	"email": "maria.clara@gmail.com"
            }
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/inscricoes
        name: "4"
        meta:
          id: req_7f91c71de2f148a59d396b2c13cffa30
          created: 1779802559198
          modified: 1779802828844
          isPrivate: false
          description: ""
          sortKey: -1779802559198
        method: POST
        body:
          mimeType: application/json
          text: |-
            {
            	"eventoId": 4,
            	"participanteId": 4
            }
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/notificacoes
        name: "6"
        meta:
          id: req_fd1d6c5b54044af9a5bc4d0a404df80b
          created: 1779802836779
          modified: 1779803034260
          isPrivate: false
          description: ""
          sortKey: -1779802836779
        method: GET
        headers:
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/inscricoes
        name: "7"
        meta:
          id: req_f4985000b4ef436eac207ee5477149e3
          created: 1779803053783
          modified: 1779803105111
          isPrivate: false
          description: ""
          sortKey: -1779803053783
        method: POST
        body:
          mimeType: application/json
          text: |-
            {
            	"eventoId": 4,
            	"participanteId": 4
            }
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/inscricoes/1/cancelar
        name: "8"
        meta:
          id: req_6ed6b7222d3f473ba4feb234361f4218
          created: 1779803116296
          modified: 1779803389273
          isPrivate: false
          description: ""
          sortKey: -1779803116297
        method: PATCH
        body:
          mimeType: application/json
          text: ""
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/notificacoes/estatisticas
        name: "10"
        meta:
          id: req_f5439c0dc0c846c4a9baca089cb07832
          created: 1779803399879
          modified: 1779803432128
          isPrivate: false
          description: ""
          sortKey: -1779803399879
        method: GET
        headers:
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/notificacoes/1/reenviar
        name: "11"
        meta:
          id: req_8974140eabbe4bfebae99def90cbe176
          created: 1779803452393
          modified: 1779803500973
          isPrivate: false
          description: ""
          sortKey: -1779803452393
        method: POST
        body:
          mimeType: application/json
          text: ""
        headers:
          - name: Content-Type
            value: application/json
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/exportar/eventos/xml
        name: "12"
        meta:
          id: req_d3a70c0cc96d442cae09751f1cf0415c
          created: 1779803557013
          modified: 1779803583096
          isPrivate: false
          description: ""
          sortKey: -1779803557013
        method: GET
        headers:
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/exportar/relatorio/inscricoes
        name: "13"
        meta:
          id: req_b71229c024a042be95baed9196a1cfdf
          created: 1779803592022
          modified: 1779803621571
          isPrivate: false
          description: ""
          sortKey: -1779803592022
        method: GET
        headers:
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/eventos/2/banner
        name: "14"
        meta:
          id: req_23148b5c588046d790a1e2e621c3d232
          created: 1779803633662
          modified: 1779803696746
          isPrivate: false
          description: ""
          sortKey: -1779803633662
        method: POST
        body:
          mimeType: multipart/form-data
          params:
            - name: banner
              value: ""
              description: ""
              disabled: false
              fileName: C:\Users\NB06-2DEV\OneDrive - SESISENAISP - Escolas\Área de
                Trabalho\ONG- Cidade Verde\Cadastro.png
              type: file
        headers:
          - name: Content-Type
            value: multipart/form-data
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/api-docs
        name: "15"
        meta:
          id: req_abeebe25209e487f8b1fa9389ad5796b
          created: 1779803711524
          modified: 1779803739992
          isPrivate: false
          description: ""
          sortKey: -1779803711524
        method: GET
        headers:
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
      - url: http://localhost:3000/eventos
        name: "17"
        meta:
          id: req_93eb3840b1ad4b649e142a9f6c3985a4
          created: 1779803749126
          modified: 1779803782994
          isPrivate: false
          description: ""
          sortKey: -1779803749126
        method: GET
        headers:
          - name: User-Agent
            value: insomnia/12.6.0
            description: ""
            disabled: false
        settings:
          renderRequestBody: true
          encodeUrl: true
          followRedirects: global
          cookies:
            send: true
            store: true
          rebuildPath: true
cookieJar:
  name: Default Jar
  meta:
    id: jar_a2b419c779193b5ed2b978d216b13b71df45efc2
    created: 1774958780368
    modified: 1774958780368
environments:
  name: Base Environment
  meta:
    id: env_a2b419c779193b5ed2b978d216b13b71df45efc2
    created: 1760718333050
    modified: 1774958780329
    isPrivate: false
