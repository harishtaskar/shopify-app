const express = require("express");
const multer = require("multer");
const productRouter = express.Router();
const mongoose = require("mongoose");
const productSchema = require("../schema/product");
// const imageSchema = require("../schema/product");

mongoose
  .connect("mongodb://localhost:27017/shopify")
  .then(() => {
    console.log("Connected...");
  })
  .catch((e) => {
    console.log(e);
  });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

productRouter.post("/", async (req, res) => {
  try {
    const name = req.body;
    console.log(name);
    // const image = req.file.buffer;
    // const product = new productSchema({
    //   name,
    //   category,
    //   price,
    //   discount,
    //   description,
    //   image,
    //   colors,
    //   availability,
    //   returnPolicy,
    //   instruction,
    // });
    // await product.save().catch((err) => {
    //   if (err) {
    //     console.error(err.message);
    //     res.status(500).send("Error in Uploading Data");
    //   } else {
    //     console.log("Data uploaded successfully");
    //   }
    // });
    // const newImage = new imageSchema({ data: image });
    // newImage.save((err, savedImage) => {
    //   if (err) {
    //     console.error(err);
    //     res.status(500).send("Error in uploading image");
    //   } else {
    //     res.send("Image Uploaded Successfully");
    //   }
    // });
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
});
{
  // run();
  // async function run() {
  //   try {
  //     const product = await new productSchema({
  //       productName: "Jeans",
  //       price: 19,
  //       colors: ["black", "grey", "blue"],
  //       description: `Jeans are a type of pants or trousers made from denim or dungaree cloth. Often the term "jeans" refers to a particular style of trousers, called "blue jeans", with copper-riveted pockets which were invented by Jacob W. Davis in 1871`,
  //       images: null,
  //       availability: true,
  //       category: "mens",
  //       productID: "2597WERGTS",
  //       discount: 15,
  //       instruction: "Dry wash",
  //       returnPolicy: "7 Days Return.",
  //     });
  //     await product.save();
  //     console.log("Successfully added");
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }
}

module.exports = productRouter;
