const anadirLinea = require('../utils/anadirLinea')


const triggerDelete = nombreTabla => {
  return new Promise(async (resolve, reject) => {
    // AQUI LLAMAR A LA BBDDD CON CONNETION Y resolve con TRUE
    const verificar = await anadirLinea(`CREATE TRIGGER tr_delete${nombreTabla.toUpperCase()} BEFORE DELETE ON ${nombreTabla} 
    FOR EACH ROW 
    INSERT INTO bitacora(usuario, descripcion, fecha) VALUES (user(), "${nombreTabla} eliminado", now());
    //`)
    if (verificar) {
      resolve(true)
    } else {
      console.log('Error anadiendo la linea procediemiento insert')
    }
  })
}

module.exports = triggerDelete