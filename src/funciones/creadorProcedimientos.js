const consultaSimple = require('./consultaSimple')
const procedimientoInsert = require('./procedimientoInsert')
const procedimientoUpdate = require('./procedimientoUpdate')
const procedimientoDelete = require('./procedimientoDelete')

const creadorProcedimientos = async (listaCampos, tipoCampos, nombreTabla) => {
  return new Promise(async (resolve, reject )=> {
    const insert = await procedimientoInsert(listaCampos, tipoCampos, nombreTabla)
    if(insert) {
      console.log('Insert Bien')
    }

    const update = await procedimientoUpdate(listaCampos, tipoCampos, nombreTabla)
    if(update) {
      console.log('Update Bien')
    }
    
    const borrar = await procedimientoDelete(listaCampos,nombreTabla)
    if(borrar) {
      console.log('Delete Bien')
    }



    resolve(true)
  })
}


module.exports = creadorProcedimientos