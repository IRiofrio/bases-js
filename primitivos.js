// String
let name = "John";

// Number
let age = 25;

// Boolean
let isStudent = true;

// Undefined
let address;

// Null
let salary = null;

// Symbol
let uniqueId = Symbol("id");

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;

//console.log(name, age, isStudent, address, salary, uniqueId, bigNumber);
// variables primitivas son los que no se pueden dividir en partes más pequeñas
//string, number, boolean, undefined, null, symbol, bigint

//variables no primitivas son los que se pueden dividir en partes más pequeñas
//array, object, function, date, regex y set

let personaje = {
    nombre: "Ivan Riofrio",
    edad: 30,
    poder: "Kamehameha",
    amigos: ["Vegeta", "Piccolo", "Krillin"],
    transformaciones: {
        base: "Goku",
        superSaiyan: "Goku Super Saiyan",
        superSaiyanBlue: "Goku Super Saiyan Blue"
    },
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};
personaje.nombre = "Hilder Riofrio";
console.log(personaje);

console.log('****************************');
