/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   return array[0];
}

function devolverUltimoElemento(array) {
    return array[array.length-1];

}

function obtenerLargoDelArray(array) {
    return array.length;
}

function incrementarPorUno(array) {
   for ( let i = 0; i<array.length; i++){
      array[i] += 1;
   }
return array; 
}
   
function agregarItemAlFinalDelArray(array, elemento) {
   array.push (elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   palabras = palabras.join(" ");
   return palabras;

}

function arrayContiene(array, elemento) {
   if (elemento = array.includes(elemento)){
      return true;
   } else return false; 
   
}

function agregarNumeros(arrayOfNums) {
    var suma = 0;
    for ( i = 0; i<arrayOfNums.length;i++){
      suma = suma + arrayOfNums[i];
    } return suma;

}

function promedioResultadosTest(resultadosTest) {
   var suma = 0;
   for (let i = 0; i<resultadosTest.length; i ++){
      suma = suma + resultadosTest[i];
   }
   var promedio = suma/resultadosTest.length;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   var numeroMax = arrayOfNums[0];
   for (let i = 0; i<arrayOfNums.length; i ++){
      if ( numeroMax < arrayOfNums[i]){
         numeroMax = arrayOfNums[i];
      }
   }
   return numeroMax

}

function multiplicarArgumentos() {
   var producto = 1
   if ( arguments.length === 0){
      return 0;
   } else if ( arguments.length === 1){
      return arguments[0];
   } else{
      for (let i =0; i < arguments.length; i ++){
         producto = producto*arguments[i];
      }
      return producto;
   }
   
}

function cuentoElementos(array) {
   var nuevo = array.filter ((i)=> i>18);
   return nuevo.length;
   
}

function diaDeLaSemana(numeroDeDia) {
   if ( numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana";
   } else return "Es dia laboral";
   
 }

function empiezaConNueve(num) {
   let texto =num.toString();
   let primerValor = texto.charAt(0);
   if (primerValor === "9"){
      return true;
   } else return false; 

}

function todosIguales(array) {
   let comparar = array[0];
   for (let i = 1 ; i<array.length; i ++ ){
      if ( array[i] !== comparar){
         return false;
      } else return true; 
   } 
 
}

function mesesDelAño(array) {
   let newArray = [];
   for ( let i = 0 ; i<array.length; i ++){
      if ( array [i]=== "Enero"){
         newArray.push(array[i]);
      } else if ( array[i]=== "Marzo"){
         newArray.push(array[i]);
      } else if (array[i]=== "Noviembre"){
         newArray.push(array[i]);
      }  
   } 
   if ( newArray.length !== 3){
      return "No se encontraron los meses pedidos";
   } else return newArray;
}

function tablaDelSeis() {
   let tabla = [];
   for ( let i =0; i < 11; i++){
      tabla.push(i*6);
   }
   return tabla;
}

function mayorACien(array) {
   let nuevo =[];
   for (let i = 0; i<array.length;i++){
      if ( array [i]>100){
         nuevo.push(array[i]);
      }
   }
   return nuevo;

}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   let arr = [];
   for (let i = 0; i < 10; i++){
      num = num + 2;
      if (num === i){
         break;
      } else {
         arr.push(num);
      }   
   }
   if (arr.length < 10){
      return "Se interrumpio la ejecución";
   } else return arr;
   
}

function continueStatement(num) {
   let nuevoArray = [];
   for (let i = 0; i<10;i++){
      if (i === 5 ){
         continue;
      } else {
         num = num + 2;
         nuevoArray.push(num);
      }
   }
   return nuevoArray;
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
