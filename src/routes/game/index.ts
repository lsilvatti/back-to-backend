import { Router } from 'express';

import bodyValidationMiddleware from '@middlewares/validation/body/index.js';
import { gameSchema, gameQuerySchema, gameStatusUpdateSchema, idParamSchema } from '@schemas/game/index.js';

import GameRepository from '@repositories/game/index.js';
import GameService from '@services/game/index.js';
import GameController from '@controllers/game/index.js';
import queryValidationMiddleware from '@middlewares/validation/query/index.ts.js';
import paramValidationMiddleware from '@middlewares/validation/param/index.ts.js';

const repository = GameRepository();
const service = GameService(repository);
const controller = GameController(service);

const router = Router();

router.post('/', bodyValidationMiddleware(gameSchema), controller.addGame);
router.get('/', controller.getAllGames);
router.delete('/:id', paramValidationMiddleware(idParamSchema), controller.deleteGame);
router.get('/search', queryValidationMiddleware(gameQuerySchema), controller.findGames);
router.patch('/:id/status', paramValidationMiddleware(idParamSchema), bodyValidationMiddleware(gameStatusUpdateSchema), controller.changeGameStatus);

export default router;