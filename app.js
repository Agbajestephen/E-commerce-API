const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv/config");
const api = process.env.API_URL;

//middlewaree
app.use(bodyParser.json());
app.use(morgan("tiny"));

const productsSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: Number,
});

const Product = mongoose.model('Product',productsSchema)

app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "hair dresser",
    Image: "some_url",
  };
  res.send(product);
});

app.post(`${api}/products`, (req, res) => {
    const product = new Product({
        name:req.body.name,
        image:req.body.image,
        countInStock:req.body.countInStock
    })

    product.save().then((createdProduct =>{
        res.status(201).json(createdProduct)
    }))
  res.send(newProduct);
});

mongoose
  .connect(process.env.CONNECTION_STRING, {
    //d
    // useNewUrlParser : true,
    // useUnifiedTopology : true,
    dbName: "eshop-database",
  })
  .then(() => {
    console.log("Database connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});
