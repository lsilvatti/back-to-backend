import { Router } from 'express';

import validateBody from '@middlewares/validate-schema/index.js';
import gameSchema from '@schemas/game/index.js';

import GameRepository from '@repositories/game/index.js';
import GameService from '@services/game/index.js';
import GameController from '@controllers/game/index.js';

const repository = GameRepository();
const service = GameService(repository);
const controller = GameController(service);

const router = Router();

router.post('/', validateBody(gameSchema), controller.addGame);

export default router;