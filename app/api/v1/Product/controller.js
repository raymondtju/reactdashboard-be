const Product = require("./model");
const ProductStat = require("../ProductStat/model");

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();

    const productStat = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productStat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProduct,
};
