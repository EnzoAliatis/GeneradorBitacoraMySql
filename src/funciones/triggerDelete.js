const triggerDelete = nombreTabla => {
  return new Promise((resolve, reject) => {
    console.log(`CREATE TRIGGER tr_delete${nombreTabla.toUpperCase()} BEFORE DELETE ON ${nombreTabla} FOR EACH ROW INSERT INTO bitacora(usuario, descripcion, fecha) VALUES (user(), "${nombreTabla} creado", now());`)
    resolve(true)
  })
}

module.exports = triggerDelete