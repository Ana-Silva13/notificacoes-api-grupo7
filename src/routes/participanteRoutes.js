// src/routes/participanteRoutes.js
const express = require("express");
const router = express.Router();
const ParticipanteController = require("../controllers/ParticipanteController");

router.get("/", ParticipanteController.index);
router.get("/:id", ParticipanteController.show);
router.post("/", ParticipanteController.store);
router.put("/:id", ParticipanteController.update);
router.delete("/:id", ParticipanteController.destroy);

/**
 * @swagger
 * components:
 *   schemas:
 *     Participante:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID gerado automaticamente
 *         nome:
 *           type: string
 *           description: Nome do participante
 *         email:
 *           type: string
 *           description: E-mail do participante
 *       example:
 *         id: 1
 *         nome: Ana Silva
 *         email: ana@email.com
 */

/**
 * @swagger
 * /participantes:
 *   get:
 *     summary: Listar todos os participantes
 *     tags: [Participantes]
 *     responses:
 *       200:
 *         description: Lista de participantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Participante'
 */

/**
 * @swagger
 * /participantes/{id}:
 *   get:
 *     summary: Obter um participante por ID
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do participante
 *     responses:
 *       200:
 *         description: Participante encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Participante'
 *       404:
 *         description: Participante não encontrado
 */

/**
 * @swagger
 * /participantes:
 *   post:
 *     summary: Criar um novo participante
 *     tags: [Participantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Participante'
 *     responses:
 *       201:
 *         description: Participante criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Participante'
 */

/**
 * @swagger
 * /participantes/{id}:
 *   put:
 *     summary: Atualizar um participante por ID
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do participante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Participante'
 *     responses:
 *       200:
 *         description: Participante atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Participante'
 *       404:
 *         description: Participante não encontrado
 */

/**
 * @swagger
 * /participantes/{id}:
 *   delete:
 *     summary: Deletar um participante por ID
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do participante
 *     responses:
 *       204:
 *         description: Participante deletado com sucesso
 *       404:
 *         description: Participante não encontrado
 */

module.exports = router;