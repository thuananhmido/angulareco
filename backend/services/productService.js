const {
  addProduct,
  updateProductValidation,
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
    // const { error } = editProduct(params);
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
  exports.updateProduct = async (params) => {
    const { error } = updateProductValidation(params);
    if (error) throw { message: error.details[0].message, statusCode: 400 };
    const { productId, title, image, description,price,quantity,cat_id } = params;
  
    return new Promise((resolve) => {
      db.query(
        `SELECT * FROM products WHERE id = ?`,
        [productId],
        (err, result) => {
          if (err) reject({ message: err, statusCode: 500 });
          if (result.length === 0) {
            reject({
              message: "please try again",
              statusCode: 400,
            });
          }
 
      let query = "";

      
        query = `title = '${title}', image = '${image}', description = '${description}',price = '${price}',quantity='${quantity}',cat_id ='${cat_id}'`;
            db.query(
              `UPDATE products SET ${query} WHERE id = ?`,
              [productId],
              (err, result) => {
                if (err) throw { message: err, statusCode: 500 };
                resolve({
                  message: "Product updated",
                  data: result,
                });
              }
            );
      
            }
      );
    
          });
          
     };
  