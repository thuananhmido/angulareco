const express = require("express");
const router = express.Router();
const db = require("../database/db");


// GET SINGLE PRODUCT BY ID
router.get("/:productId", async (req, res) => {
  const { productId } = req.params;
  db.query(
    `SELECT p.id, p.title, p.image, p.images, p.description, p.price, p.quantity, p.short_desc,
        c.title as category FROM category p JOIN categories c ON
            c.id = p.cat_id WHERE p.id = ${productId}`,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results[0]);
    }
  );
});

// GET ALL PRODUCTS ADMIN
router.get("/", async (req, res) => {

  db.query(
    `SELECT * FROM category  `,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results);
    }
  );
});
module.exports = router;
