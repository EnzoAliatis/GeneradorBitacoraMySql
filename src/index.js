const connection = require('./connection')

const consultaSimple = require('./funciones/consultaSimple')

const dameCampos = require('./funciones/dameCampos')





const startApp = async () => {
  console.log('Estoy vivo')

  const nameDataBase = 'proyecto'
  const setDataBaseQuery = `USE ${nameDataBase}`
  const consultaTablasQuery = `SHOW FULL TABLES FROM ${nameDataBase};`
  const consultaCampos = 'DESCRIBE '

  let nombreTablas = []
  let nombreCampos = []

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


  console.log(nombreTablas)


  const camposTablas = await dameCampos(nombreTablas, connection)

  console.log(camposTablas[1])




}




startApp()












