const consultaSimple = (connection, query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, rows) => {
      if (err) {
        console.log('Error en la connection')
        console.log(err)
        reject("Error en la promesa")
      } else {
        console.log('Bien en la promesa')
        resolve(rows)
      }
    })
  })
}


module.exports = consultaSimple