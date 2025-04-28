import { Router, RequestHandler } from 'express';
import { recoverPassword } from '../controllers/password.controller';
import { verifyCode } from '../controllers/verifyCodeController';
import { resetPassword } from '../controllers/resetPasswordController';

const router = Router();

router.post('/recover-password', recoverPassword as RequestHandler);
router.post('/verify-code', verifyCode as RequestHandler);
router.post('/reset-password', resetPassword as RequestHandler);

export default router;


