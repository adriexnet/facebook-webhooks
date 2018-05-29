import { Router } from 'express';
import webHookCtrl from './web-hook.ctrl';
import { http404Handler, htpp500Handler } from '../../middlewares';

const router = Router();
router.use('/api/v1', webHookCtrl);
router.use(http404Handler());
router.use(htpp500Handler());

export default router;
