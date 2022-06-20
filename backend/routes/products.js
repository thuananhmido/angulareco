const express = require("express");
const router = express.Router();
const db = require("../database/db");
const productController = require("../controllers/productController");
router.post("/addProduct", productController.add_product);
router.put("/:productId", productController.update_product);

// router.put("/editProduct/:productId",productController.edit_product);


// GET ALL PRODUCTS
// router.get("/", async (req, res) => {
//   const { page = 1, limit = 10 } = req.query;

//   let startValue;
//   let endValue;

//   if (page > 0) {
//     startValue = page * limit - limit; // 0,10,20,30
//     endValue = page * limit;
//   } else {
//     startValue = 0;
//     endValue = 10;
//   }

//   db.query(
//     `SELECT p.id, p.title, p.image, p.price, p.short_desc, p.quantity,
//         c.title as category FROM products p JOIN categories c ON
//             c.id = p.cat_id LIMIT ${startValue}, ${limit}`,
//     (err, results) => {
//       if (err) console.log(err);
//       else res.json(results);
//     }
//   );
// });

// GET SINGLE PRODUCT BY ID
router.get("/:productId", async (req, res) => {
  const { productId } = req.params;
  db.query(
    `SELECT p.id, p.title, p.image, p.images, p.description, p.price, p.quantity, p.short_desc,p.cat_id,
        c.title as category FROM products p JOIN categories c ON
            c.id = p.cat_id WHERE p.id = ${productId}`,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results[0]);
    }
  );
});
// Delete SINGLE PRODUCT BY ID
router.delete("/:productId", async (req, res) => {
  const { productId } = req.params;
  db.query(
    `DELETE FROM products WHERE id = ${productId}`,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results[0]);
    }
  );
});

// GET ALL PRODUCTS ADMIN
router.get("/", async (req, res) => {

  db.query(
    `SELECT p.id, p.title, p.image, p.price, p.short_desc, p.quantity,
        c.title as category FROM products p JOIN categories c ON
            c.id = p.cat_id `,
    (err, results) => {
      if (err) console.log(err);
      else res.json(results);
    }
  );
});
module.exports = router;
