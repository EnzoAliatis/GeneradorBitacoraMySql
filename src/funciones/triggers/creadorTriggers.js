const triggerInsert = require('./triggerInsert')
const triggerUpdate = require('./triggerUpdate')
const triggerDelete = require('./triggerDelete')


const creadorTriggers = (nombreTabla) => {
  return new Promise(async (resolve, reject) => {
    const insercion = await triggerInsert(nombreTabla)
    if (insercion) {
      console.log(`Trigger insercion Bien`)
    }

    const actualizacion = await triggerUpdate(nombreTabla)
    if (actualizacion) {
      console.log(`Trigger Update Bien`)
    }

    const eliminacion = await triggerDelete(nombreTabla)
    if (eliminacion) {
      console.log(`Trigger delete Bien`)
    }

    if (insercion && actualizacion && eliminacion) {
      resolve(true)
    } else {
      console.log('Error en el creador de Triggers')
      reject()
    }

  })
}

module.exports = creadorTriggers