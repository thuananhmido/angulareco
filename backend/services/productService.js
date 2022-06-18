const {
  addProduct,
  editProduct,
  } = require("../middleware/validation");
  const db = require("../database/db");
  const jwt = require("jsonwebtoken");
  
  exports.addProduct = async (params) => {
    const { error } = addProduct(params);
    if (error) throw { message: error.details[0].message, statusCode: 400 };
  
    const { title, image, description, price, quantity, cat_id } = params;
  
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO products (id, title, image,images,description,price,quantity,short_desc,cat_id) VALUES (?,?,?,?,?,?,?,?,?)',
        ['',title, image,'',description,price, quantity,'',cat_id],
        (err, result) => {
          if (err) 
          {
            reject({
              message: "Something went wrong, please try again",
              statusCode: 400,
              data: err,
            });
           
          } else {
            const token = jwt.sign({ data: result }, "secret");
            resolve({
              data: result,
              message: "You have successfully add product.",
              token: token,
              statusCode: 200,
            });
          } 
        }
      );
    });
  };
  
  //UPDATE SẢN PHẨM
  // exports.editProduct = async (params) => {
  //   const { error } = editProduct(params);
  //   if (error) throw { message: error.details[0].message, statusCode: 400 };

  //   const {id,title, image, description, price, quantity, cat_id } = params;
    
  //   return new Promise((resolve, reject) => {
  //     db.query(
  //       `UPDATE products SET ${title} = ? ,${image} = ? ,${description} = ?,${price} = ?,${quantity} = ?,${cat_id} = ? WHERE id = ${id}`,
  //       [title, image,description,price, quantity,cat_id],
  //       (err, result) => {
  //         if (err) 
  //         {
  //           reject({
  //             message: "Something went wrong, please try again",
  //             statusCode: 400,
  //             data: err,
  //           });
           
  //         } else {
  //           const token = jwt.sign({ data: result }, "secret");
  //           resolve({
  //             data: result,
  //             message: "You have successfully add product.",
  //             token: token,
  //             statusCode: 200,
  //           });
  //             alert("Bạn đã thêm sản phẩm thành công");
  //         } 
  //       }
  //     );
  //   });
  // };