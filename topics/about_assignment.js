// module("About Assignment (topics/about_assignment.js)");

// ---- Limpio la consola durante las pruebas. ---
// console.clear
// ----------------------------

const { equal } = require('assert')
const { __, test } = require('../support/koans')

test("local variables", () => {
    const temp = 1;
    equal(temp, 1, "Assign a value to the variable temp");
});

// Pruebas de consola: 
// console.log(typeof global)
// Con la instruccion anterior, verfico, o me aseguro de "que tipo de dato estoy manejando"

// console.log(`Aca imprimo el objeto global ${global}`)
// Con la instruccion anterior, queria ver que elementos tenia el objeto 'global'


test("global variables", () => {
    temp = 1; // Not using var is an example. Always use var in practise.
    global.temp = 1
    equal(global.temp, temp, 'global variables are assigned to the global object');
});
