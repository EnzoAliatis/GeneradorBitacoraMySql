
const idExtractor = listaCampos => {
  let idx = ""
  idx += listaCampos[0]
  return idx 
}

const procedimientoDelete = (listaCampos, nombreTabla) => {
  const id = idExtractor(listaCampos)

  return new Promise((resolve, reject) => {
    console.log(`CREATE PROCEDURE borrar${nombreTabla.toUpperCase()}(in idx int) BEGIN DELETE FROM ${nombreTabla} WHERE ${id}=idx; END`)
    resolve(true)
  })
}

module.exports = procedimientoDelete