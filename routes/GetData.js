const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Data = require('../models/Data'); 



router.get('/', (req, res) => {
    Data.find({}).then(data => {
        res.send(data);
    })
})
router.post('/load/data', (req,res) => {

});


module.exports = router;