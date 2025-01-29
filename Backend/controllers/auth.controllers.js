import adminModel from "../database/models/admin.model.js";
import sellerCustomerModel from "../database/models/chat/sellerCustomer.model.js";
import sellerModel from "../database/models/seller.model.js";
import { response } from "../utiles/response.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const seller_register = async (req, res) => {
    const body = req.body;
    body.method = 'manually'
    const seller = await sellerModel.findOne({email: body.email});
    try {
        if (seller) return response(res, 500, {message: "Seller already registered."});

        const hash = bcrypt.hashSync(body.password, 10);
        body.password = hash;
        await sellerModel.insertMany(body)

        const getSeller = await sellerModel.findOne({email: body.email});
        // Chat seller customer
        await sellerCustomerModel.create({
            myId: getSeller.id
        })

        response(res, 200, {status: 'success', message: 'Register Success', data: body});
    } catch (error) {
        response(res, 400, {status: 'error', message: error.message});
    }
}

const seller_login = async (req, res) => {
    const body = req.body;
    const seller = await sellerModel.findOne({email: body.email});

    try {
        const matchPass = bcrypt.compareSync(body.password, seller.password);
        if (!seller || !matchPass) return response(res,400,{status: 'fail', message: "Email or password not valid."});

        const token = jwt.sign({id: seller.id, name: seller.name, role: seller.role, email: seller.email}, process.env.SECRET, {expiresIn: '7d'});
        res.cookie('accessToken', token, {expires: new Date(Date.now() + (7*24*60*60*1000))}) // 7 days
        response(res,200,{status: 'success', message: 'Login success.', token: token});
    } catch (error) {
        res.status(500).json({status: 'Error', message: error.message});
    }
}

const admin_login = async (req, res) => {
    // console.log(req.body);
    const body = req.body;
    const admin = await adminModel.findOne({email: body.email});
    try {
        const matchPass = bcrypt.compareSync(body.password, admin.password);
        if (!admin || !matchPass) return response(res,400,{status: 'fail', message: "Email or password not valid."});

        let token = jwt.sign({ id: admin.id, name: admin.name, email: admin.email, role: admin.role }, process.env.SECRET, {
            expiresIn: '7d'
        });
        res.cookie('accessToken', token, {expires: new Date(Date.now() + (7*24*60*60*1000))}) // 7 days
        response(res,200,{status: 'success', message: 'Login success.', token: token});
        // res.status(200).json({status: 'success', data: body});
    } catch (error) {
        res.status(500).json({status: 'Error', message: error.message});
    }
}

const get_user = async (req,res) => {
    // console.log(req.params);
    const { id, role } = req.userInfo;
    // console.log('controller' , req.userInfo)
    try {
        if (role === 'admin') {
            const user = await adminModel.findById(id);
            response(res, 200, {status: "success", message: 'Get user success.', data: user})
        }else{
            const user = await sellerModel.findById(id);
            response(res, 200, {status: "success", message: 'Get user success.', data: user})
        }
        
    } catch (error) {
        res.status(500).json({status: 'Error', message: error.message});
    }
}

export {
    admin_login,
    seller_register,
    seller_login,
    get_user
}