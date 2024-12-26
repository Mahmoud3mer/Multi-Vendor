import adminModel from "../database/models/admin.model.js";
import { response } from "../utiles/response.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const Register = async (req, res) => {
    const body = req.body;
    const admin = await adminModel.findOne({email: body.email});

    try {
        if (admin) return response(res, 500, {message: "Admin already registered."});
        const hash = bcrypt.hashSync(body.password, 10);
        body.password = hash;
        await adminModel.insertMany(body)
        response(res, 200, {status: 'success', data: body});
    } catch (error) {
        
    }
}

const Login = async (req, res) => {
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

const GetUser = async (req,res) => {
    const users = await adminModel.find();
    response(res, 200, {status: "success", data: users})
}

export {
    Login,
    Register,
    GetUser
}