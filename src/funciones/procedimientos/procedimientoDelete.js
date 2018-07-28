const anadirLinea = require('../utils/anadirLinea')

const idExtractor = listaCampos => {
  let idx = ""
  idx += listaCampos[0]
  return idx
}

const procedimientoDelete = (listaCampos, nombreTabla) => {
  const id = idExtractor(listaCampos)

  return new Promise(async (resolve, reject) => {
    const verificar = await anadirLinea(`DELIMITER //
    CREATE PROCEDURE borrar${nombreTabla.toUpperCase()}(in idx int) 
    BEGIN 
    DELETE FROM ${nombreTabla} WHERE ${id}=idx; 
    END //`)
    if (verificar) {
      resolve(true)
    } else {
      console.log('Error anadiendo la linea procediemiento insert')
    }
  })
}

module.exports = procedimientoDelete