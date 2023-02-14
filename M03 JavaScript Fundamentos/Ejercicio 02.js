/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   return string;
}
devolverString("string")

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   return (x+y);
}
suma(2,3);

function resta(x, y) {
   return (x-y);
}
resta(5,2);

function divide(x, y) {
   return (x/y);
}
divide(10,5);

function multiplica(x, y) {
   return (x*y);
}
multiplica(5,4);
function obtenerResto(x, y) {
   return (x%y);
}
obtenerResto(21,4);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
