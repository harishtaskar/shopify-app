const mongoose = require("mongoose");
const express = require("express");
const ProductRouter = require("./routes/productRouter");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/shopify")
  .then(() => {
    console.log("Connected...");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/product", ProductRouter);

app.listen(port, () => {
  console.log("Running on port " + port);
});
