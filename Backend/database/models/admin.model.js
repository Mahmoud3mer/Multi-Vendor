import { Schema, model } from 'mongoose';
import validator from 'validator';

const adminSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        validate: {
            validator: (value) => {
                return validator.isEmail(value)
            }
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        validate: {
            validator: (value) => {
                return validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minSymbols: 1,
                    minNumbers: 1
                })
            }
        }
    },
    image: String,
    role: {
        type: String,
        default: 'admin'
    }
})

const adminModel = model('admin', adminSchema);

export default adminModel;