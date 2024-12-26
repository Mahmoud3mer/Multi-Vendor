import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
    const {token} = req.headers

    if(!token){
        return res.status(409).json({status: 'error', message: "Please login first."});
    }else{
        try {
            let decoded = await jwt.verify(token, process.env.SECRET);
            console.log(decoded);
            // set admin info in request to access it at anywhere
            req.adminInfo = decoded;
            next();
        } catch (error) {
            return res.status(409).json({status: 'error', message: "Please login first."});
        }
    }
}

export default verifyToken;