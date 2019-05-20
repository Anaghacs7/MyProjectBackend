const express = require('express');
const router = express.Router();
const bodyParser=require('body-parser');
const Product = require('../models/Product');
const keys = require('../config/keys');
const jwt = require('jsonwebtoken');

router.get('/test', (req,res) =>
 res.json({msg:"this is a test"}));
router.post('/products', (req, res) => {
   
    
    const newProduct = new Product({
        
        rentAmount   : req.body.rentAmount,
        productName  : req.body.productName,
        company      : req.body.company,
        suitableFor  : req.body.suitableFor,
        size         : req.body.size,
        material     : req.body.material,
        other        : req.body.other,
        rentierName  : req.body.rentierName,
        rentierEmail  : req.body.rentierEmail
    });
    console.log(req.body.rentAmount);
    newProduct
        .save()
        .then(item => res.json(item))
        .catch(err => console.log(err));
});
router.get('/products',(req, res) => {
   
 //const docs = new Product();
 //Inquiry.find()
 //       .then(docs => docs.forEach(doc => console.log("Name: " + doc.productName)))
 //       .catch(err => console.log(err));
 Product
        .find()
        .then(docs => res.json(docs))
        .catch(err => console.log(err));
           
//console.log(docs);
});
            
module.exports = router;