const express = require("express");
const router = express.Router();
const db = require("../database/db");


// GET SINGLE PRODUCT BY ID
router.get("/:categoriesId", async (req, res) => {
  const {categoriesId} = req.params;
  db.query(
    `SELECT * FROM categories c INNER JOIN products p ON c.id = p.cat_id WHERE c.id = ${categoriesId}`,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results);
    }
  );
});

// GET ALL PRODUCTS ADMIN
router.get("/", async (req, res) => {

  db.query(
    `SELECT * FROM categories`,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results);
    }
  );
});
module.exports = router;
