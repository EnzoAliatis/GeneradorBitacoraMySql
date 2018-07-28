

const triggerInsert = nombreTabla => {
  return new Promise((resolve, reject) => {
    console.log(`CREATE TRIGGER tr_insert${nombreTabla.toUpperCase()} BEFORE INSERT ON ${nombreTabla} FOR EACH ROW INSERT INTO bitacora(usuario, descripcion, fecha) VALUES (user(), "${nombreTabla} creado", now());`)
    resolve(true)
  })
}

module.exports = triggerInsert