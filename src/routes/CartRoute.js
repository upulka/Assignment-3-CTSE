const express = require('express');
const router = express.Router();
const Cart = require("../models/CartModel");

//Add products to the cart
router.route("/").post((req , res) =>{
    // const item = req.body.item;
    const productName = req.body.productName;
    const price = req.body.price;
    const description = req.body.description;
    const photo = req.body.photo;
    const qty = req.body.qty;

    const newProduct = new Cart();

    // newProduct.item = item;
    newProduct.productName = productName;
    newProduct.price = price;
    newProduct.description = description;
    newProduct.photo = photo;
    newProduct.qty = qty;

    newProduct.save().then(()=> {
            res.json("product added to cart")
        }).catch((err)=>{
            console.log(err)
    });
})


//Retrieve all the cart items(useful for the report)
router.route('/allCartItems').get((req, res)=>{
    Cart.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})

//Delete a product from the cart
router.delete("/delete/:id", (req, res) => {
    Cart.find({item: req.params.id})
    .then((item)=>{
        if(item){
        console.log(item);
           Cart.findByIdAndDelete(item)
           .then((deletedItem)=>{
                res.json(deletedItem);
           })
           .catch((err)=>{
                   console.log(err);
               });
        }

    })
    .catch((err)=>{
        console.log(err);
    });
});

//Update query to update the count of the products in the shopping cart
//router.put("/put/:id" , auth , (req , res) =>{
router.put("/put/:id" ,  (req , res) =>{
    const updatedItem = {
        qty : req.body.qty
    }

    Cart.findByIdAndUpdate(
        {_id : req.params.id},
        {$set : updatedItem },
        (req , res , err) => {
            if(!err){
                console.log("updated");
            }else{
                console.log(err)
            }
        }
    );
});

module.exports = router;