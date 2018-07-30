const anadirLinea = require('../utils/anadirLinea')


const triggerInsert = nombreTabla => {
  return new Promise(async (resolve, reject) => {
    // AQUI LLAMAR A LA BBDDD CON CONNETION Y resolve con TRUE
    const verificar = await anadirLinea(`CREATE TRIGGER tr_insert${nombreTabla.toUpperCase()} AFTER INSERT ON ${nombreTabla} 
    FOR EACH ROW INSERT INTO bitacora(usuario, descripcion, fecha, idModificado) VALUES (user(), "${nombreTabla} creado", now(), new.id);
    //`)
    if (verificar) {
      resolve(true)
    } else {
      console.log('Error anadiendo la linea procediemiento insert')
    }
  })
}

module.exports = triggerInsert