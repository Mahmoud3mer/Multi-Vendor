import express from 'express'
import { add_category, delete_category, get_categories, get_specific_category, update_category } from '../controllers/category.controller.js';
import verifyToken from '../middlewares/verifyToken.js';
import multer from 'multer';
import allowTo from '../utiles/authorizeAllowTo.js';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null,'../public/uploads');
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
//     }
// })
const upload = multer({ dest: 'uploads/' })

const categoryRoutes = express.Router();

categoryRoutes.post('/add-category', verifyToken, allowTo('admin'), upload.single('image'), add_category);
categoryRoutes.get('/get-categories', verifyToken, allowTo('admin'), get_categories);
categoryRoutes.get('/get-category/:categoryID', verifyToken, allowTo('admin'), get_specific_category);
categoryRoutes.post('/update-category/:categoryID', verifyToken, allowTo('admin'), update_category);
categoryRoutes.get('/delete-category/:categoryID', verifyToken, allowTo('admin'), delete_category);


export default categoryRoutes;