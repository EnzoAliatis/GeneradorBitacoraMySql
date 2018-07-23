const consultaSimple = require('./consultaSimple')

const consultaCampos = 'DESCRIBE '

let nombreCampos = []

const dameCampos =  (nombreTablas, connection) => {
  return new Promise((resolve, reject) => {
    nombreTablas.map(async (item, inx) => {
      nombreCampos.push( await consultaSimple(connection, consultaCampos+item))
      if (inx+1 === nombreTablas.length) {
        resolve(nombreCampos)
      }
    })
  })
}

module.exports = dameCampos