const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  data: Buffer,
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  productID: String,
  category: String,
  price: {
    type: Number,
    required: true,
  },
  discount: Number,
  description: {
    type: String,
    required: true,
  },
  images: [imageSchema],
  colors: [String],
  availability: Boolean,
  returnPolicy: String,
  instruction: String,
});

module.exports = mongoose.model("product", productSchema);
// module.exports = mongoose.model("image", imageSchema);
