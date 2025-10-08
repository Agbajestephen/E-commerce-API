const {category} = require('../models/category');
const router = express.Router();
const express = ('express');

router.get(`/`, async (req, res)=>{
    const categoryList = await category.find();

    if(!category){
        res.status(500).json({sucess:false})
    }
    res.send(categoryList);
});
module.exports = router;
