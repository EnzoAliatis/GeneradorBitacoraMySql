const fs = require('fs')


const anadirLinea = data => {
  return new Promise((resolve, reject) => {
    fs.appendFile('crebas.sql', data+' \n', 'utf8', (err) => {
      if (err) {
        console.log('Error tratando de escribir el crebas')
      } else {
        console.log('linea Anadida')
        resolve(true)
      }
    });
  })
}

module.exports = anadirLinea