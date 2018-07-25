const connection = require('./connection')

const consultaSimple = require('./funciones/consultaSimple')

const dameCampos = require('./funciones/dameCampos')

const creadorProcedimientos = require('./funciones/creadorProcedimientos')





const startApp = async () => {
  console.log('Estoy vivo')

  const nameDataBase = 'proyecto'
  const setDataBaseQuery = `USE ${nameDataBase}`
  const consultaTablasQuery = `SHOW FULL TABLES FROM ${nameDataBase};`



  let nombreTablas = []

  const seteado = await consultaSimple(connection, setDataBaseQuery)

  if (seteado) {
    console.log("bien seatado")
  } else {
    console.log('mal seteado')
  }

  const nombreTablasResult = await consultaSimple(connection, consultaTablasQuery)

  nombreTablasResult.map(item => {
    nombreTablas.push(item.Tables_in_proyecto)
  })




  const camposTablas = await dameCampos(nombreTablas, connection)


  // ahora crear procedimiento almacenados por tabla

  nombreTablas.map(async (item, idx) => {
    console.log(item)
    let camposTemp = []
    let typesTemp = []
    camposTablas[idx].map((i, x) => {
      camposTemp.push(i.Field)
      typesTemp.push(i.Type)
    })
    const creandoProcedimientos = await creadorProcedimientos(camposTemp, typesTemp, item)

    if (creandoProcedimientos) {
      console.log('Procedimientos creados para la tabla ', item)
    }
  })


  


}




startApp()












