import { Router } from 'express';
import { getIndexTeam } from '../controllers/team.js';

const router = Router();

router.route('/').get(getIndexTeam);

export default router;
