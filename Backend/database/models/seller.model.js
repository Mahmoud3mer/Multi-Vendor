import mongoose from "mongoose";
import validator from 'validator';

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
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
    role: {
        type: String,
        default: 'seller'
    },
    status: {
        type: String,
        default: 'pending'
    },
    payment: {
        type: String,
        default: 'inactive'
    },
    image: {
        type: String,
        default: ''
    },
    method: {
        type: String,
        required: true
    },
    shopInfo: {
        type: Object,
        default: {}
    }
}, {timestamps: true})

const sellerModel = mongoose.model('seller', sellerSchema);

export default sellerModel;