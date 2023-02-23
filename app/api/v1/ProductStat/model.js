const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductStatSchema = new Schema(
  {
    // productId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Product",
    // },
    productId: String,
    yearlySalesTotal: String,
    yearlyTotalSoldUnits: String,
    year: Number,
    monthlyData: [{ month: String, totalSales: Number, totalUnits: Number }],
    dailyData: [{ date: String, totalSales: Number, totalUnits: Number }],
  },
  { timestamps: true }
);

const ProductStat = model("ProductStat", ProductStatSchema);
module.exports = ProductStat;
