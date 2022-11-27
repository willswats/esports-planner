import express from 'express';
import {
  getIndexGame,
  getAddGame,
  postAddGame,
  getShowGame,
  getEditGame,
  postEditGame,
  postDeleteGame,
} from '../controllers/game.js';
import { validateFormGame } from '../utils/validateFormGame.js';

const router = express.Router();

router.route('/').get(getIndexGame);

router.route('/add').get(getAddGame).post(validateFormGame, postAddGame);

router.route('/:id').get(getShowGame);

router.route('/:id/edit').get(getEditGame).post(validateFormGame, postEditGame);

router.route('/:id/delete').post(postDeleteGame);

export default router;
