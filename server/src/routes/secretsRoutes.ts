import express from 'express'
import { getSecrets } from '../controllers/secretsController.js'
import { catchAsync } from '../utils/catchAsync.js'
import { authenticate } from '../utils/middleware.js'

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Secrets
 *   description: Secrets management
 */

/**
 * @swagger
 * /secrets:
 *   get:
 *     summary: Retrieve a list of client secrets
 *     tags: [Secrets]
 *     responses:
 *       200:
 *         description: A list of client secrets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Secrets'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */
router.route('/').get(authenticate, catchAsync(getSecrets))

export default router
