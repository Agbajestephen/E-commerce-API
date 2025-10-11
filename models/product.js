const mongoose = require("mongoose");
const { Category } = require("./category");

const productsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  richDescription: {
    type: String,
    default: "",
  },
  images: [
    {
      type: String,
    },
  ],
  brand: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  category:{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  countInStock:{
    type : Number,
    required : true,
    min : 0,
    max:255
  },
  rating:{
    type : Number,
    required : true,
    // min : 0,
    // max:255
  },
  numReviews:{
    type : Number,
    default : 0,
  },
  isFeatured:{
    type : Boolean,
   default : false,
  },
  Date:{
    type : Date,
    default : Date.now
  }
});

exports.Product = mongoose.model("Product", productsSchema);
