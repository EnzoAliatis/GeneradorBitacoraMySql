const consultaSimple = require('./consultaSimple')
const procedimientoInsert = require('./procedimientoInsert')

const creadorProcedimientos = async (listaCampos, tipoCampos, nombreTabla) => {
  return new Promise(async (resolve, reject )=> {
    const insert = await procedimientoInsert(listaCampos, tipoCampos, nombreTabla)

    if(insert) {
      console.log('Insert Bien')
    }



    resolve(true)
  })
}


module.exports = creadorProcedimientos