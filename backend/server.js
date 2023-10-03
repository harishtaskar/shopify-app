const mongoose = require("mongoose");
const express = require("express");
const ProductRouter = require("./routes/productRouter");
const app = express();
const port = 5000;
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
