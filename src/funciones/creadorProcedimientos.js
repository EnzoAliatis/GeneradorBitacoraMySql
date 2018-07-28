const consultaSimple = require('./consultaSimple')
const procedimientoInsert = require('./procedimientoInsert')
const procedimientoUpdate = require('./procedimientoUpdate')

const creadorProcedimientos = async (listaCampos, tipoCampos, nombreTabla) => {
  return new Promise(async (resolve, reject )=> {
    const insert = await procedimientoInsert(listaCampos, tipoCampos, nombreTabla)
    if(insert) {
      console.log('Insert Bien')
    }

    const update = await procedimientoUpdate(listaCampos, tipoCampos, nombreTabla)





    resolve(true)
  })
}


module.exports = creadorProcedimientos