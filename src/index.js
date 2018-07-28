
const connection = require('./funciones/utils/connection')

const consultaSimple = require('./funciones/utils/consultaSimple')

const dameCampos = require('./funciones/utils/dameCampos')

const creadorProcedimientos = require('./funciones/procedimientos/creadorProcedimientos')

const creadorTriggers = require('./funciones/triggers/creadorTriggers')

const bitacoraConfig = require('./funciones/bitacora/bitacoraConfig')
const bitacora = require('./funciones/bitacora/bitacora')

const databaseConfig = require('./databaseConfig')

const creadorArchivo = require('./funciones/utils/creadorArchivo')
const anadirLinea = require('./funciones/utils/anadirLinea')





const startApp = async () => {
  console.log('Estoy vivo')

  const nameDataBase = databaseConfig.name
  const setDataBaseQuery = `USE ${nameDataBase};`
  const consultaTablasQuery = `SHOW FULL TABLES FROM ${nameDataBase};`



  const queryBitacora = bitacora(bitacoraConfig)


  let nombreTablas = []

  const seteado = await consultaSimple(connection, setDataBaseQuery)

  if (seteado) {
    console.log(`Bien seteado para tabla ${nameDataBase}`)
  } else {
    console.log('mal seteado')
  }

  // AQUI ENVIAR AL TXT EL QUERY PARA CREAR BITACORA TABLE
  creadorArchivo(setDataBaseQuery)
  anadirLinea(queryBitacora)

  

  const nombreTablasResult = await consultaSimple(connection, consultaTablasQuery)

  nombreTablasResult.map(item => {
    // HEY!!!!
    // HEY!!!!
    // AQUI NECESITO TU ATENCION!!!!!! Tables_in_(AQUI PON EL NOMBRE DE TU BBDD MANUALMENTE)
    nombreTablas.push(item.Tables_in_mibbdd)
  })

  const camposTablas = await dameCampos(nombreTablas, connection)


  // ahora crear procedimiento almacenados por tabla

  nombreTablas.map(async (nombreTabla, idx) => {
    console.log(nombreTabla)
    let camposTemp = []
    let typesTemp = []
    camposTablas[idx].map((i, x) => {
      camposTemp.push(i.Field)
      typesTemp.push(i.Type)
    })
    const creandoProcedimientos = await creadorProcedimientos(camposTemp, typesTemp, nombreTabla)

    if (creandoProcedimientos) {
      console.log('Procedimientos Creados para la tabla ', nombreTabla)
    }

    const creandoTriggers = await creadorTriggers(nombreTabla)
    if (creandoTriggers) {
      console.log('Triggers creados para la tabla ', nombreTabla)
    }

    if (creadorProcedimientos && creadorTriggers) {
      console.log('TODO BIEN')
    } else {
      console.log('Error el INDEX')
    }
  })
}


startApp()












