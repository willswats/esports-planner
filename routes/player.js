import express from 'express';
import {
  getIndexPlayer,
  getAddPlayer,
  postAddPlayer,
  getShowPlayer,
  getEditPlayer,
  postEditPlayer,
  postDeletePlayer,
} from '../controllers/player.js';
import { validateFormPlayer } from '../utils/validateFormPlayer.js';

const router = express.Router();

router.route('/').get(getIndexPlayer);

router.route('/add').get(getAddPlayer).post(validateFormPlayer, postAddPlayer);

router.route('/:id').get(getShowPlayer);

router
  .route('/:id/edit')
  .get(getEditPlayer)
  .post(validateFormPlayer, postEditPlayer);

router.route('/:id/delete').post(postDeletePlayer);

export default router;
