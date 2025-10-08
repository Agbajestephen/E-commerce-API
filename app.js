const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv/config");
const api = process.env.API_URL;
const productRouter=require('./routers/products')

//middlewaree
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use(`${api}/products`, productRouter)


const Product = require('./models/product');


mongoose.connect(process.env.CONNECTION_STRING, {
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
