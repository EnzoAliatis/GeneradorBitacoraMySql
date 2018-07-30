const anadirLinea = require('../utils/anadirLinea')

const triggerUpdate = nombreTabla => {
  return new Promise(async (resolve, reject) => {
    // AQUI LLAMAR A LA BBDDD CON CONNETION Y resolve con TRUE
    const verificar = await anadirLinea(`CREATE TRIGGER tr_update${nombreTabla.toUpperCase()} BEFORE UPDATE ON ${nombreTabla} 
    FOR EACH ROW INSERT INTO bitacora(usuario, descripcion, fecha, idModificado) VALUES (user(), "${nombreTabla} actualizado", now(), old.id);
    //`)
    if (verificar) {
      resolve(true)
    } else {
      console.log('Error anadiendo la linea procediemiento insert')
    }
  })
}

module.exports = triggerUpdate