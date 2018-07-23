const dameTablas =  (database) => {
  return new Promise((resolve, reject) => {
    nombreTablas.map(async (item, inx) => {
      nombreCampos.push( await consultaSimple(connection, consultaCampos+item))
      resolve()
    })
  })
}

module.exports = dameCampos