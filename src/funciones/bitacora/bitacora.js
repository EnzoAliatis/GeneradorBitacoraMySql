
const bitacora = (bitacoraConfig) => {
  let campos = ''

  bitacoraConfig.campos.map((item, idx) => {
    campos += `${item} ${bitacoraConfig.tiposCampos[idx]}`
    if(idx < bitacoraConfig.tiposCampos.length-1) {
      campos+=', '
    }
  })
  const query = `CREATE TABLE ${bitacoraConfig.name} (${campos});`

  return query
}

module.exports = bitacora