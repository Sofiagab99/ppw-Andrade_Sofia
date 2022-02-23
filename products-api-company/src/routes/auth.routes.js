import { Router } from "express";
const router = Router()


import * as authCtrl from '../controllers/auth.controller'
import {verifySignup} from '../middlewares'
import { checkDuplicateUsernameOrEmail } from "../middlewares/verifySignup";

router.post('/signup', [verifySignup, checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authCtrl.signup)

router.post('/singin', authCtrl.signin)

export default router;