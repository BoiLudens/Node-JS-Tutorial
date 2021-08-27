const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodecomplete',
  password: 'my-secret-pw',
});

module.exports = pool.promise();
