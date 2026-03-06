const Product = require("../models/Products");
const { generateCategoryTags } = require("../service/aiService");

exports.generateProductData = async (req, res) => {

  try {

    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        message: "Product name and description required"
      });
    }

    const aiResult = await generateCategoryTags(name, description);

    const product = new Product({
      name,
      description,
      category: aiResult.category,
      subCategory: aiResult.sub_category,
      tags: aiResult.tags,
      sustainabilityFilters: aiResult.sustainability_filters
    });

    await product.save();

    res.json({
      message: "Product categorized successfully",
      data: product
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "AI generation failed"
    });

  }

};