/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   if (x>y){
      return x;
   } else if (y>x){
      return y;
   } else if (x === y){
      return x || y;
   }
 }

function mayoriaDeEdad(edad) {
   if (edad >= 18){
      return "Allowed";
   } else{
      return "Not allowed"
   }
}
   

function conection(status) {
   if (status === 1){
      return "Online";
   } else if (status === 2){
      return "Away";
   } else{
      return "Offline";
   }

}

function saludo(idioma) {
   if (idioma === "aleman"){
      return "Guten Tag!";
   } else if (idioma === "mandarin"){
      return "Ni Hao!";
   } else if (idioma === "ingles"){
      return "Hello!"
   } else {
      return "Hola!"
   }
   
}

function colors(color) {
   switch (color) {
      case "blue":
         return "This is blue";
      case "red" :
         return "This is red";
      case "green" :
         return "This is green";
      case "orange" :
         return "This is orange";
         
      default:
         return "Color not found";
   }
   
}

function esDiezOCinco(num) {
   if (num === 10 || num === 5){
      return true;
   } else return false;

}

function estaEnRango(num) {
   if (num < 50 && num > 20){
      return true;
   } else return false;

}

function esEntero(num) {
   if (num%1 === 0 ){
      return true;
   } else return false;

}

function fizzBuzz(num) {
   if (num%3 === 0 && num%5 === 0){
      return "fizzbuzz";
   } else if (num%3 === 0){
      return "fizz";
   } else if (num%5 === 0){
      return "buzz";
   } else return false;
   
}

function operadoresLogicos(num1, num2, num3) {
   if (num1 > num2 && num1 > num3 && num1>0){
      return "Numero 1 es mayor y positivo";
   } else if (num1<0 || num2<0 || num3<0){
      return "Hay negativos";
   } else if (num3 >num1 && num3>num2){
      num3 = num3 + 1
      return num3;
   } else if ( num1===0 && num2===0 && num3 === 0){
      return "Error";
   } else return false;

}

function esPrimo(num) {
   if (num <=0 || num === 1){
      return false;
   } for (i = 2; i < num; i++){
      if (num % i !== 0){
         return true;
      } else return false;
   }

}

function esVerdadero(valor) {
   if ( valor === true ){
      return "Soy verdadero"
   } else return "Soy falso"
   
}

function tieneTresDigitos(num) {
   var numString = num.toString();
   if (numString.length === 3){
      return true;
   } else return false; 
   
}

function doWhile(num) {
   let veces = 0;
   do { 
      num += 5;
      veces ++;
   } while (veces<8);
   return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
