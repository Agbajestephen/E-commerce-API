const {order} = require('../models/order');
const router = express.Router();
const express = require('express');

router.get(`/`, async(req, res)=>{
    const orderList = await order.find();

    if(!orderList){
        res.send(500).json({success:false})
    }
    res.send(orderList);
})
module.exports = router;