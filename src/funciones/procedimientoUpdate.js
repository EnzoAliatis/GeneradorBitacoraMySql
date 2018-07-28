


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


  return new Promise((resolve, reject) => {
    console.log(`CREATE PROCEDURE actualizar${nombreTabla.toUpperCase()}(in ${camposIn}) BEGIN UPDATE ${nombreTabla} set ${camposSet} WHERE ${id}=${id}x; END`)
    resolve(true)
  })
}

module.exports = procedimientoUpdate