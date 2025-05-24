import { Router } from 'express';

import { sendEmail, getEmail } from '../controllers/controller';

const router = Router();

router.post('/send', sendEmail);
router.get('/send', getEmail);

export default router;
