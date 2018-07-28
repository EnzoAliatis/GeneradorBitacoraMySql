# Funcionamiento

### Importante

Esta app de node solo se ha probado con bases de datos MySql, pero probablemente se pueda utilizar en otras. 

JavaScript no es el mejor lenguaje de programación para hacer esta clase de programas ya que el comportamiento del lenguaje lo limita, para saber más visitar [JavaScript asynchronous](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee).

Personalmente recomendaría hacerlo con Java, Python o Ruby.

La app generará un Crebas.sql con el fin de ser copiado y pegado en el ejecutador de Query.

La gracia de generar el Crebas.sql y no hacer que se ejecute linea a linea esta en que una vez que corrio la app, nos de la oportunidad de modificar algo del crebas si asi lo deseo.

La tabla donde se va a guardar todas las bitacoras se llama "bitacora" por defecto, y sus campos son 'usuario', 'descripcion', 'fecha' ; Esta Tabla es modificable desde el archivo bitacoraConfig.js con el fin de poder expander los campos o cambiar el nombre si asi se desea.

Es importante ejecutar la App una sola vez, en caso de hacerlo varias veces, asegurarce de borrar la tabla donde se esten guardando las bitacoras (Esto de seguro lo arreglaré en el futuro).

Para que la App sirve correctamente, asegurarse de leer el SETUP.

## Antes de ejecutar

 Tener descargado [Nodejs](https://nodejs.org/es/)

Instalar las dependencias npm

```console
cd GeneradorBitacoraMySql-master
npm i
```



### SETUP

Ejecutar las siguites lines en la consola, dentro del proyecto.

```
touch src/databaseConfig.js
```



Dentro del archivo creado pegamos lo siguiente:

```javascript
const databaseConfig = {
  name: 'nombreBaseDeDatos',
  host: 'localhost',
  user: 'root',
  password: 'codigoBBDD'
}

module.exports = databaseConfig
```



**Importantísimo**

En el index.js en la linea 59, Agregar en **minusculas** el nombre de la base de datos despues de la palabra item_Tables_in_(Aquí sin parentesis).

Ejemplo:

```javascript
nombreTablas.push(item.Tables_in_mibasededatos)
```







### Forma de Uso

En la consola, dentro del proyecto ejecutamos

```
npm start
```

Vemos por consola que todo este bien y se generará un Crebas.sql

Listo, copiamos el crebas lo pegamos en el Query Tool y probamos los procediemientos y bitacora creada.



#### salir del programa

Ctrl c







 

