/* 1. Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], eres mayor/menor de edad" en función de la edad que le pasemos. */
function mayoriaedad(name, age) {
  if (age > 18) {
    console.log("Hola " + name + " eres mayor de edad");
  } else {
    console.log("Hola " + name + " eres menor de edad");
  }
}

mayoriaedad("Patricia", 16);
mayoriaedad("Guissepe", 60);

/* 2. Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor. */

function highnumber(numberA, numberB) {
  if (numberA > numberB) {
    console.log(numberA);
  } else {
    console.log(numberB);
  }
}
highnumber(5, 3);
highnumber(2, 8);

/* 3.Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero.*/

function number(numberA) {
  if (numberA === 0) {
    console.log(numberA + " es igual a cero");
  } else if (numberA > 0) {
    console.log(numberA + " es positivo");
  } else {
    console.log(numberA + " es negativo");
  }
}

number(0);
number(6);
number(-10);

/* 4.Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor" */

function media(gradeA, gradeB, graceC) {
  if ((gradeA + gradeB + graceC) / 3 <= 4) {
    console.log("Estas suspenso");
  } else if (
    (gradeA + gradeB + graceC) / 3 >= 5 &&
    (gradeA + gradeB + graceC) / 3 <= 8
  ) {
    console.log("Estas aprobado");
  } else {
    console.log("Tienes Matrícula de honor");
  }
}

media(3, 2, 1);
media(6, 8, 7);
media(10, 10, 10);

/* 5.Crea una función que reciba tres números y devuelva el mayor de ellos.*/

function number(numberA, numberB, numberC) {
  if (numberA > numberB && numberA > numberC) {
    console.log(numberA);
  } else if (numberB > numberA && numberB > numberC) {
    console.log(numberB);
  } else {
    console.log(numberC);
  }
}

number(8, 5, 3);
number(8, 9, 3);
number(8, 2, 21);

/* 6.Crea una función que reciba un número entero y devuelva "Es divisible por 3" si es divisible por 3, "Es divisible por 5" si es divisible por 5, y "Es divisible por 3 y por 5" si es divisible por ambos. Si no es divisible por ninguno, devuelve el número.*/

function division(number) {
  if (number % 3 === 0 && number % 5 !== 0) {
    console.log(number + " es divisible por 3");
  } else if (number % 5 === 0 && number % 3 !== 0) {
    console.log(number + " es divisible por 5");
  } else if (number % 5 === 0 && number % 3 === 0) {
    console.log(number + " es divisible por 3 y por 5");
  } else number % 5 !== 0 && number % 3 !== 0;
  {
    console.log(number);
  }
}

division(3);
division(5);
division(15);
division(14);

/* 7.Crea una función que reciba un número entero y determine si es par o impar. Imprime por consola "Es un número par" o "Es un número impar" en función del resultado.*/

function par(number) {
  if (number % 2 === 0) {
    console.log(number + " Es un número par");
  } else {
    console.log(number + " Es un número impar");
  }
}

par(2);
par(33);

/* 8.Crea una función que reciba un año y determine si es un año bisiesto. Un año es bisiesto si es divisible por 4, pero no es divisible por 100, a menos que también sea divisible por 400. Imprime por consola "Es un año bisiesto" o "No es un año bisiesto" en función del resultado
 */

function año(number) {
  if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) {
    console.log("El año " + number + " es un año bisiesto");
  } else {
    console.log("El año " + number + " no es un año bisiesto");
  }
}

año(2012);
año(100);
año(400);
año(2024);
