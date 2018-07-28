
const procedimientoInsert = require('./procedimientoInsert')
const procedimientoUpdate = require('./procedimientoUpdate')
const procedimientoDelete = require('./procedimientoDelete')

const creadorProcedimientos =  (listaCampos, tipoCampos, nombreTabla) => {
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

    if(insert && update && borrar) {
      console.log('Procedimiento Creados Correctamente')
      resolve(true)
    } else {
      console.log('Error en el creador de Procedimientos')
      reject()
    }
  })
}


module.exports = creadorProcedimientos