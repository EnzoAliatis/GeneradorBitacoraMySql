const fs = require('fs')



const creadorArchivo = data => {
  fs.writeFile('crebas.sql', data+' \n', 'utf8', (err) => {
    if (err) {
      console.log('Error tratando de escribir el crebas')
    } else {
      console.log('Primera Linea Crebas Escrita')
    }
  });

}

module.exports = creadorArchivo