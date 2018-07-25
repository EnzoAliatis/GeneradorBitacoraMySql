const consultaSimple = require('./consultaSimple')


const queryCamposIn = (listaCampos, tipoCampos) => {
  let qCampos = ""
  listaCampos.map((item, idx) => {
    if(item !== 'id') {
      qCampos += `${item} ${tipoCampos[idx]}`
      if(idx < tipoCampos.length-1) {
        qCampos+=', '
      }
    }
  })
  return qCampos
}

const queryCampos = (listaCampos, tipoCampos) => {
  let qCampos = ""
  listaCampos.map((item, idx) => {
    if (item !== 'id') {
      qCampos += `${item}`
      if(idx < tipoCampos.length-1) {
        qCampos+=', '
      }
    }
  })
  return qCampos
}

const procedimientoInsert = (listaCampos, tipoCampos, nombreTabla, connection) => {
  const camposIn = queryCamposIn(listaCampos, tipoCampos)
  const campos = queryCampos(listaCampos, tipoCampos)

  return new Promise((resolve, reject) => {
    // AQUI LLAMAR A LA BBDDD CON CONNETION Y resolve con TRUE
    console.log(`CREATE PROCEDURE insertar${nombreTabla.toUpperCase()}(in ${camposIn}) BEGIN INSERT INTO ${nombreTabla}(${campos}) VALUES ${campos}; end `)    
    resolve(true)
  })

}



module.exports = procedimientoInsert