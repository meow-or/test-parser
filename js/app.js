const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test_base',
  password: ''
});

connection.connect( err => {
  if(err) {
    console.log(err);
    return err;
  } else {
    console.log('Database - OK')
  }
});

let query = "SELECT * FROM user";

connection.query(query, (err, result, field) => {
  console.log(err);
  console.log(result);
  console.log(result[2].lastname);
  //console.log(field);
});

connection.end(err => {
  if(err) {
    console.log(err);
    return err;
  } else {
    console.log('Database - Close')
  }
})