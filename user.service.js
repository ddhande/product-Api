const pool = require("../../config/databases");

module.exports = {
  createUser: (data, callback) => {
    pool.query(
      `insert into items(name,address,email_id,,number,password,products)
            values(?,?,?,?,?,?)`,
      [
        data.name,
        data.address,
        data.email_id,
        data.number,
        data.password,
        data.products,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUsers: (callback) => {
    pool.query(`SELECT * from items`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getproductsByUserId: (user_id, callback) => {
    pool.query(
      `SELECT * from items where user_id=?`,
      [user_id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  Userlogin: (email, callback) => {
    `select * from items where email_id=?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      };
  },
};
