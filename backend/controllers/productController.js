const { addProduct } = require("../services/productService");
exports.add_product = async (req, res, next) => {
    const { title, image, description,price,quantity,cat_id } = req.body;
    console.log(req.body.value);
    addProduct({ title, image, description,price,quantity,cat_id })
      .then((result) => {
        const { statusCode = 200, message, data, token } = result;
        res.status(statusCode).send({ message, data, token });
      })
      .catch((err) => {
        const { statusCode = 400, message, data } = err;
        res.status(statusCode).send({ message, data }) && next(err);
      });
    
  };
