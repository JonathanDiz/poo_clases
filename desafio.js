/* Desafío: javaScript

Nombre de Desafío: poo_clases

Instrucciones */

// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  let opciones = {
    usuario,
    nombre,
    email,
    password
  }

  class Usuario{
    constructor(usuario, nombre, email, password){
      this.usuario = usuario
      this.nombre = nombre
      this.email = email
      this.password = password
    }

    saludar(){
      return Usuario.saludar.prototype (`Hola, mi nombre es ${{nombre}}`)
    }
}
}
console.log(Usuario.saludar())

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  function saludar(){
    return Constructor.saludar.prototype (`Hello World`)
  }
  return saludar
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  function reverse() {
    return this.reverse.prototype (`toni`)
  }
  return reverse
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(/*Escribir los argumentos que recibe el constructor*/) {
      // Crea el constructor:
      let detalle = {
        nombre: 'Jonathan',
        apellido: 'Díaz',
        edad: 30,
        domicilio: 'Quilicura'
      }
      return detalle
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.dir = dir

  console.log(crearInstanciaPersona('Jonathan', 'Diaz', 30, 'Quilicura'))
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  class persona {
    nombre
    edad
  }
  return persona
  function datos(){
    console.log(agregarMetodo.persona('Jonathan', 30))
    return datos
  }
}