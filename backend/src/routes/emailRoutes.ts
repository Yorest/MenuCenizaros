import { Router } from 'express';

import { sendEmail } from '../controllers/controller';

const router = Router();

router.post('/send', sendEmail);

export default router;
