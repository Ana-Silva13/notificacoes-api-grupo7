const express = require("express");
const router = express.Router();
const ParticipanteController = require("../controllers/ParticipanteController");




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
 *     Erro:
 *       type: object
 *       properties:
 *         erro:
 *           type: object
 *           properties:
 *             tipo:
 *               type: string
 *               example: NotFoundError
 *             mensagem:
 *               type: string
 *               example: Participante não encontrado(a)
 *             statusCode:
 *               type: integer
 *               example: 404
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
router.get("/", ParticipanteController.index);
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */

router.get("/:id", ParticipanteController.show);
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
 *       
 *    
 */
router.post("/", ParticipanteController.store);
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
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 * 
 */
router.put("/:id", ParticipanteController.update);
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.delete("/:id", ParticipanteController.destroy);

module.exports = router;