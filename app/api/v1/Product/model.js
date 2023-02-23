const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
    productStat: {
      type: Schema.Types.ObjectId,
      ref: "ProductStat",
    },
  },
  { timestamps: true }
);

const Product = model("Product", ProductSchema);
module.exports = Product;
