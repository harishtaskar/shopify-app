const express = require("express");
const multer = require("multer");
const ProductRouter = express.Router();
const mongoose = require("mongoose");
const productSchema = require("../schema/product");
const imageSchema = require("../schema/product");

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

ProductRouter.post("/", upload.single("image"), async (req, res) => {
  try {
    const data = req.body;
    const image = req.file.buffer;
    const product = new productSchema(data);
    product.save((err, dataUploaded) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error in Uploading Data");
      } else {
        console.log("Data uploaded successfully");
      }
    });
    const newImage = new imageSchema({ data: image });
    newImage.save((err, savedImage) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error in uploading image");
      } else {
        res.send("Image Uploaded Successfully");
      }
    });
  } catch (error) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
});

module.exports = ProductRouter;
