// module("About Equality (topics/about_equality.js)");
const { equal, ok } = require('assert')
const { __, test } = require('../support/koans')

// ---- Limpio la consola durante las pruebas. ---
// console.clear
// ----------------------------

// Notar que aca en equals, no hay mensaje de error entonces toma [ERR_ASSERTION] , que lo toma de 
test("numeric equality", () => {
    equal(3 + 4,  7, "");
});

// El parametro "concatenate the strings" es el error que termina arrojando por consola. 
test("string equality", () => {
    equal("3" + "7", "37", "concatenate the strings");
});

test("equality without type coercion", () => {
    ok(3 === 3, 'what is exactly equal to 3?');
});

test("equality with type coercion", () => {
    ok(3 == "3", 'what string is equal to 3, with type coercion?');
});

test("string literals", () => {
    equal("frankenstein", "frankenstein", "quote types are interchangable, but must match.");
    equal("frankenstein", 'frankenstein', "quote types can use both single and double quotes.");
});
