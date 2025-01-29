import { Schema, model } from 'mongoose';

const sellerCustomerSchema = new Schema({
    myId: {
        type: String,
        required: [true, 'My Id is required.'],
    },
    myFriends: {
        type: Array,
        default: [],
    }
},{timestamps: true})

const sellerCustomerModel = model('seller_customer', sellerCustomerSchema);

export default sellerCustomerModel;