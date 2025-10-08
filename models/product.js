const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

exports.Product = mongoose.model("Product", productsSchema);
