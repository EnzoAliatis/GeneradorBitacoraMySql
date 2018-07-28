const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Aliatis777',
  database: 'servidor'
})

mysqlConnection.connect((err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('DB connection success')
  }
})

module.exports = mysqlConnection