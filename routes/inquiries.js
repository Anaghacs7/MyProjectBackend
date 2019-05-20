const express = require('express');
const router = express.Router();
const bodyParser=require('body-parser');
const Inquiry = require('../models/Inquiry');
const keys = require('../config/keys');
const jwt = require('jsonwebtoken');

router.get('/test', (req,res) =>
 res.json({msg:"this is a test"}));
router.post('/inquiries', (req, res) => {

    
    const newInquiry = new Inquiry({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    //console.log(req.body.name,req.body.email,req.body.message);
    newInquiry
        .save()
        .then(inq => res.json(inq))
        .catch(err => console.log(err));
});
router.get('/inquiries',(req, res) => {
   
 //const docs = new Inquiry();
 //Inquiry.find()
 //       .then(docs => docs.forEach(doc => console.log("Name: " + doc.name)))
 //       .catch(err => console.log(err));
 Inquiry
        .find()
        .then(inq => res.json(inq))
        .catch(err => console.log(err));
           
//console.log(docs);
});
            
module.exports = router;