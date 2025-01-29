import express from 'express'
import { admin_login, seller_register, seller_login, get_user } from '../controllers/auth.controllers.js';
import verifyToken from '../middlewares/verifyToken.js';

const authRoutes = express.Router();

authRoutes.post('/admin-login', admin_login);
authRoutes.post('/seller-register', seller_register);
authRoutes.post('/seller-login', seller_login);
authRoutes.get('/get-user',verifyToken, get_user);

export default authRoutes;