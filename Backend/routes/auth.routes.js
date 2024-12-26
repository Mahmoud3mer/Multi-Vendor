import express from 'express'
import { Login, Register , GetUser } from '../controllers/auth.controllers.js';
import verifyToken from '../middlewares/verifyToken.js';

const authRoutes = express.Router();

authRoutes.post('/admin-login', Login);
authRoutes.post('/admin-register', Register);
authRoutes.get('/get-user', verifyToken, GetUser);

export default authRoutes;