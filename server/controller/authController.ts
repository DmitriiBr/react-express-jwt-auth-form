import { Request, Response } from 'express';
import pool from '../queries';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator/src/validation-result';
import { queryCandidates, queryCreateUser } from '../database/queries';

type Roles = 'USER' | 'MANAGER' | 'ADMIN';

interface IUSER {
  _id: number;
  username: string;
  email: string;
  password: string;
  user_roles: Roles[];
}

class authController {
  public async registration(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: 'Error in registration process',
          errors,
        });
      }
      const { username, email, password }: IUSER = req.body;
      const candidates = await pool.query(queryCandidates, [username, email]);
      if (candidates.rows.length) {
        return res.status(400).json({
          message: 'User with that username or email already exists',
        });
      }
      const hashPassowrd = bcrypt.hashSync(password, 8);
      // const userRole = await pool.query(queryUserExactRole, ['USER']);
      await pool.query(queryCreateUser, [
        username,
        email,
        hashPassowrd,
        '{USER}',
      ]);
      return res.json({
        message: 'User successfully created',
      });
    } catch (e: unknown) {
      console.log(e);
      res.status(400).json({
        message: 'Something went wrong',
      });
    }
  }
  public async login(req: Request, res: Response) {
    try {
      const { email, username, password }: IUSER = req.body;
      const user = await pool.query(queryCandidates, [username, email]);
      if (!user.rows.length) {
        return res.status(400).json({
          message: 'User with this username or email already exists',
        });
      }
      const validPassword = bcrypt.compareSync(password, user.rows[0].password);
      if (!validPassword) {
        return res.status(400).json({
          message: 'Password is not correct',
        });
      }
    } catch (e: unknown) {
      console.log(e);
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
}

export default new authController();
