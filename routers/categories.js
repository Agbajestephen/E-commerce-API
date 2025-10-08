const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res)=>{
    const categoryList = await Category.find();

    if(!category){
        res.status(500).json({sucess:false})
    }
    res.send(categoryList);
});
module.exports = router;
