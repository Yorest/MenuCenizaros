import { Router } from 'express';

import { sendEmail, getEmail } from '../controllers/controller';

const router = Router();

router.post('/send', sendEmail);

export default router;
