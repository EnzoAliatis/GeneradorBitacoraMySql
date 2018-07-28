const anadirLinea = require('../utils/anadirLinea')


const queryCamposIn = (listaCampos, tipoCampos) => {
  let qCampos = ""
  listaCampos.map((item, idx) => {
    qCampos += `${item}x ${tipoCampos[idx]}`
    if (idx < tipoCampos.length - 1) {
      qCampos += ', '
    }
  })
  return qCampos
}

const queryCamposSet = listaCampos => {
  let qSet = ""
  listaCampos.map((item, idx) => {
    if(item !== 'id') {
      qSet += `${item}=${item}x`
      if (idx < listaCampos.length - 1) {
        qSet += ', '
      }
    }
  })
  return qSet
}

const idExtractor = listaCampos => {
  let idx = ""
  idx += listaCampos[0]
  return idx 
}


const procedimientoUpdate = (listaCampos, tipoCampos, nombreTabla) => {
  const id = idExtractor(listaCampos)
  const camposIn = queryCamposIn(listaCampos, tipoCampos)
  const camposSet = queryCamposSet(listaCampos)


  return new Promise(async (resolve, reject) => {
    const verificar = await anadirLinea(` DELIMITER //
      CREATE PROCEDURE actualizar${nombreTabla.toUpperCase()}(in ${camposIn}) 
      BEGIN 
      UPDATE ${nombreTabla} set ${camposSet} WHERE ${id}=${id}x; 
      END //`)
    if (verificar) {
      resolve(true)
    } else {
      console.log('Error anadiendo la linea procediemiento insert')
    }
  })
}

module.exports = procedimientoUpdate