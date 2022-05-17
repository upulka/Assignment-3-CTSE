const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false

});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!!");
});

// http://localhost:8080/cart
const CartRouter = require('./src/routes/CartRoute.js');
app.use('/cart', CartRouter);

app.listen(PORT, () => {
    console.log(`server is up and running in port ${PORT}`);
});




