const express = require("express");
const router = express.Router();
const InscricaoController = require("../controllers/InscricaoController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Inscricao:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         eventoId:
 *           type: integer
 *         participanteId:
 *           type: integer
 *         dataInscricao:
 *           type: string
 *         status:
 *           type: string
 *           enum: [confirmada, cancelada]
 *       example:
 *         id: 1
 *         eventoId: 1
 *         participanteId: 1
 *         dataInscricao: "2025-08-01T10:30:00.000Z"
 *         status: confirmada
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
 *               example: Inscrição não encontrada(o)
 *             statusCode:
 *               type: integer
 *               example: 404
 */

/**
 * @swagger
 * /inscricoes:
 *   post:
 *     summary: Criar uma nova inscrição
 *     tags: [Inscricoes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventoId:
 *                 type: integer
 *                 description: ID do evento
 *               participanteId:
 *                 type: integer
 *                 description: ID do participante
 *             example:
 *               eventoId: 1
 *               participanteId: 1
 *     responses:
 *       201:
 *         description: Inscrição criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inscricao'
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.post("/", InscricaoController.store);

/**
 * @swagger
 * /inscricoes:
 *   get:
 *     summary: Listar todas as inscrições
 *     tags: [Inscricoes]
 *     responses:
 *       200:
 *         description: Lista de inscrições
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inscricao'
 */
router.get("/", InscricaoController.index);

/**
 * @swagger
 * /inscricoes/evento/{eventoId}:
 *   get:
 *     summary: Listar inscrições de um evento específico
 *     tags: [Inscricoes]
 *     parameters:
 *       - in: path
 *         name: eventoId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do evento
 *     responses:
 *       200:
 *         description: Lista de inscrições para o evento
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inscricao'
 */
router.get("/evento/:eventoId", InscricaoController.listarPorEvento);

/**
 * @swagger
 * /inscricoes/{id}/cancelar:
 *   patch:
 *     summary: Cancelar uma inscrição
 *     tags: [Inscricoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da inscrição a ser cancelada
 *     responses:
 *       200:
 *         description: Inscrição cancelada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inscricao'
 *       404:
 *         description: Inscrição não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.patch("/:id/cancelar", InscricaoController.cancelar);

module.exports = router;