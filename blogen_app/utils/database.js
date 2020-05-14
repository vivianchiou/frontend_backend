const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'blogen',
});

pool.query('select * from post', function (err, results) {
  console.log(JSON.stringify(results));
  console.log('database blogen connected');
});

module.exports = pool.promise();
