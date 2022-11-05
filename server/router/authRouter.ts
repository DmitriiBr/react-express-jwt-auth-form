import { Router } from 'express';
import authController from '../controller/authController';
import { check } from 'express-validator';
const router = Router();
const controller = authController;

router.post(
  '/registration',
  [
    check('username', 'User name cannot be blank').notEmpty(),
    check('password', 'Password cannot be less than 8 symbols').isLength({
      min: 8,
    }),
    check('email', 'Email cannot be blank').notEmpty(),
  ],
  controller.registration
);

export default router;
