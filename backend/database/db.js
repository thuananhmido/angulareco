const mysql = require("mysql");

const connection = mysql.createConnection({
  port: process.env.DB_PORT = '3306',
  host: process.env.DB_HOST = 'localhost',
  user: process.env.DB_USER = 'root',
  password: process.env.DB_PASSWORD = '',
  database: process.env.DB_NAME = 'angular-ecommerce-app',
});

connection.connect((err) => {
  if (err) console.log(err);
  else console.log("MySQL is connected...");
});

module.exports = connection;
