USE miBBDD; 
CREATE TABLE bitacora (usuario varchar (50), descripcion varchar (50), fecha TIMESTAMP default now()); 
DELIMITER //
      CREATE PROCEDURE insertarEMPLEADO(in name varchar(45)) 
      BEGIN 
      INSERT INTO empleado(name) VALUES (name); 
      END // 
DELIMITER //
      CREATE PROCEDURE insertarPRODUCTO(in descripcion varchar(45)) 
      BEGIN 
      INSERT INTO producto(descripcion) VALUES (descripcion); 
      END // 
 DELIMITER //
      CREATE PROCEDURE actualizarEMPLEADO(in idx int(11), namex varchar(45)) 
      BEGIN 
      UPDATE empleado set name=namex WHERE id=idx; 
      END // 
 DELIMITER //
      CREATE PROCEDURE actualizarPRODUCTO(in idx int(11), descripcionx varchar(45)) 
      BEGIN 
      UPDATE producto set descripcion=descripcionx WHERE id=idx; 
      END // 
DELIMITER //
    CREATE PROCEDURE borrarEMPLEADO(in idx int) 
    BEGIN 
    DELETE FROM empleado WHERE id=idx; 
    END // 
DELIMITER //
    CREATE PROCEDURE borrarPRODUCTO(in idx int) 
    BEGIN 
    DELETE FROM producto WHERE id=idx; 
    END // 
CREATE TRIGGER tr_insertEMPLEADO BEFORE INSERT ON empleado 
    FOR EACH ROW INSERT INTO bitacora(usuario, descripcion, fecha) VALUES (user(), "empleado creado", now());
    // 
CREATE TRIGGER tr_insertPRODUCTO BEFORE INSERT ON producto 
    FOR EACH ROW INSERT INTO bitacora(usuario, descripcion, fecha) VALUES (user(), "producto creado", now());
    // 
CREATE TRIGGER tr_updateEMPLEADO BEFORE UPDATE ON empleado 
    FOR EACH ROW INSERT INTO bitacora(usuario, descripcion, fecha) VALUES (user(), "empleado actualizado", now());
    // 
CREATE TRIGGER tr_updatePRODUCTO BEFORE UPDATE ON producto 
    FOR EACH ROW INSERT INTO bitacora(usuario, descripcion, fecha) VALUES (user(), "producto actualizado", now());
    // 
CREATE TRIGGER tr_deleteEMPLEADO BEFORE DELETE ON empleado 
    FOR EACH ROW 
    INSERT INTO bitacora(usuario, descripcion, fecha) VALUES (user(), "empleado eliminado", now());
    // 
CREATE TRIGGER tr_deletePRODUCTO BEFORE DELETE ON producto 
    FOR EACH ROW 
    INSERT INTO bitacora(usuario, descripcion, fecha) VALUES (user(), "producto eliminado", now());
    // 
