const bitacoraConfig = {
  name: 'bitacora',
  campos: ['usuario', 'descripcion', 'fecha', 'idModificado'],
  tiposCampos: ['varchar (50)', 'varchar (50)', 'TIMESTAMP default now()', 'varchar (50)']
}

module.exports = bitacoraConfig