const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema( {
    // item: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Product"
    // },
    productName: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    photo: {
        type: String,
        // required: true
    },
    qty:{
        type: Number
    },
    //User's token
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // },
     addToCartDate: {
         type: Date,
         default: Date.now(),
     }
});

const Cart = mongoose.model("Cart" , cartSchema);

module.exports = Cart;