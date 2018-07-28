const bitacoraConfig = {
  name: 'bitacora',
  campos: ['usuario', 'descripcion', 'fecha'],
  tiposCampos: ['varchar (50)', 'varchar (50)', 'TIMESTAMP default now()']
}

module.exports = bitacoraConfig