const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();

router.get(`/`, async (req, res) => {
  const categoryList = await Category.find();

  if (!category) {
    res.status(500).json({ sucess: false });
  }
  res.send(categoryList);
});

router.post("/", async (req, res) => {
  let category = new Category({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });

  category = await category.save();

  if (!category) return res.send(404).send("the category cannot be created...");

  res.send(category);
});

module.exports = router;
