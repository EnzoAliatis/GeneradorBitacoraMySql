const mysql = require('mysql')
const databaseConfig = require('../../databaseConfig')

const mysqlConnection = mysql.createConnection({
  host: databaseConfig.host,
  user: databaseConfig.user,
  password: databaseConfig.password,
  database: databaseConfig.name
})

mysqlConnection.connect((err) => {
  if(err) {
    console.log('No puedo conectarme a la bbdd, revisar configuraciones')
  } else {
    console.log('DB connection success')
  }
})

module.exports = mysqlConnection