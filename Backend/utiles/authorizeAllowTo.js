import { response } from '../utiles/response.js';

function allowTo(...roles){
    return (req, res, next) => {
        if (roles.includes(req.userInfo.role)) {
            next();
        }else{
            response(res, 401, { status: 'fail', message: 'Not Authorized.' });
        }
    }
}

export default allowTo;
