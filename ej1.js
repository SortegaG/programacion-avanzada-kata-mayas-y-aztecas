// Ejercicio POO 1
// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(`Tu nombre es ${this.nombre}, tienes ${this.edad} años y tu género es ${this.genero}`)
    }
}

let persona2 = new Persona("Sergio", 22, "masculino");
console.log(persona2)
persona2.obtDetalles()

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        console.log(`${this.nombre} tiene ${this.edad} años y su genero es ${this.genero}. Está en el curso ${this.curso} y va al grupo ${this.grupo}`)
    }   
}

let persona3 = new Estudiante("David", 23, "masculino", "tercero", "B");
persona3.registrar()

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(`${this.nombre} tiene ${this.edad} años y su genero es ${this.genero}. Da la asignatura ${this.asignatura} de nivel ${this.nivel}`)
    }
}

let persona4 = new Profesor ("Alex", "??", "masculino", "Desarrollo WEB", "Bootcamp")
persona4.asignar()

// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.