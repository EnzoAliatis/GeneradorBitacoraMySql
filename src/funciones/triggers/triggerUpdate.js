const triggerUpdate = nombreTabla => {
  return new Promise((resolve, reject) => {
    console.log(`CREATE TRIGGER tr_update${nombreTabla.toUpperCase()} BEFORE UPDATE ON ${nombreTabla} FOR EACH ROW INSERT INTO bitacora(usuario, descripcion, fecha) VALUES (user(), "${nombreTabla} creado", now());`)
    resolve(true)
  })
}

module.exports = triggerUpdate