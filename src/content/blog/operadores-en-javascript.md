---
title: operadores en javascript
description: En JavaScript, un operador es un símbolo especial utilizado para realizar operaciones sobre algún valor o una variable. JavaScript cuenta con operadores binarios y unitarios, además un operador ternario también llamado operador condicional.
image: https://i.imgur.com/usamdBU.png
icon: /icons/JavaScript.webp
status: public
tags:
  - 💻 Desarrollo
time: 5 minutos de lectura
date: 11 octubre, 2023
sitemap:
  changefreq: monthly
  priority: 0.7
---

En JavaScript, un operador es un símbolo especial utilizado para realizar operaciones sobre algún valor o una variable

> Es necesario conocer la diferencia entre operador y operando. El operador son los símbolos que realizan la acción (+,-,\*,/) entre otros. Los operandos son los valores o variables que van a ser ejecutadas por el operador (1, 2, x , y).

JavaScript cuenta con operadores binarios y unitarios, además un operador ternario también llamado operador condicional.

El **operador binario** requiere dos o más operando, ya sean variables o valores.

```js
x * y; // Operandos x,y Operador (*)
x + y + z; // Operandos x,y,z Operador (+)
```

Los **operadores unitarios** solo requieren un operando, ya sea antes o después del operador.

```js
contador++; // Operando 'contador' Operador (++)
contador--; // Operando 'contador' Operador (--)
!existe; // Operando 'existe' Operador (!)
typeof texto; // Operando 'texto' Operador (typeOf)
```

El **operador ternario** es el único que utiliza tres operandos, un `if/else abreviado`

```js
condition ? val1 : val2;
```

Si la condición es `true` retorna el primer valor `val1` de lo contrario, retorna el segundo valor `val2`

```js
const edad = 18;
const mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mensaje); // Resultado: "Eres mayor de edad"

const numero = 7;
const esPar = numero % 2 === 0 ? 'Es par' : 'Es impar';
console.log(esPar); // Resultado: "Es impar"
```

Los operadores en JavaScript son clasificados en tipos, aquí te dejo los más usados 👇

- 🔹 [Operadores aritméticos](#operadores-aritméticos)
- 🔹 [Operadores de asignación](#operadores-de-asignación)
- 🔹 [Operadores de comparación](#operadores-de-comparación)
- 🔹 [Operadores lógicos](#operadores-lógicos)
- 🔹 [Operadores de Cadena](#operadores-de-cadena)
- 🔹 [Operadores unitarios](#operadores-unitarios)
- 🔹 [Operadores relacionales](#operadores-relacionales)

## Operadores aritméticos

Los operadores aritméticos se utilizan para realizar operaciones matemáticas básicas.

- **_(\+) Suma_**
- **_(\-) Resta_**
- **_(\*) Multiplicación_**
- **_(/) División_**
- **_(\*\*) Exponencial_**
- **_(\+\+) Incremento_**: Agrega uno al valor del operando
- **_(\-\-) Decremento_**: disminuye uno al valor del operando
- **_(%) Módulo_**: devuelve el residuo entre dividir dos operandos

```js
const x = 5;
const y = 10;

console.log(x + y); // Output: 15
console.log(x - y); // Output: -5
console.log(x * y); // Output: 50
console.log(x / y); // Output: 0.5
console.log(x % y); // Output: 5
console.log(2 ** 3); // Output: 8

let d = 3;
let f = 3;
console.log(d++); //Output: 3 Explicación: devuelve 3 y el valor de 'd' se establece en 4
console.log(++f); //Output: 4 Explicación: Establece 'f' en 4 y devuelve 4

let g = 3;
let h = 3;
console.log(g--); //Output: 3 Explicación: devuelve 3 y el valor de 'g' se establece en 2
console.log(--h); //Output: 4 Explicación: El valor se asigna a 'h' y devuelve 3
```

## Operadores de asignación

Los operadores de asignación se utilizan para asignar valores a variables. El operador de asignación simple es el igual (=) y los compuestos son abreviación de operaciones como las siguientes.

 <!-- ***(\*) multiplicación*** -->

- **_(\+=) Suma y asignación_**
- **_(\-=) Resta y asignación_**
- **_(\*=) Multiplicación y asignación_**
- **_(/=) División y asignación_**
- **_(%=) Módulo y asignación_**
- **_(\*\*\=) Exponencial y asignación_**

```js
// Nota: Para cada ejemplo x = 10, y = 5 
let x = 10;
let y = 5;

x = y; // Equivalente a x = y;
console.log(x); // Output: 5

x += y; // Equivalente a x = x + y;
console.log(x); // Output: 15

x -= y; // Equivalente a x = x - y;
console.log(x); // Output: 5

x *= y; // Equivalente a x = x * y;
console.log(x); // Output: 50

x /= y; // Equivalente a x = x / y;
console.log(x); // Output: 2

x %= y; // Equivalente a x = x % y;
console.log(x); // Output: 0

let a = 2;
let b = 3;
a **= b; // Equivalente a x = x ** y;
console.log(a); // Output: 8
```

## Operadores de comparación

Los operadores de comparación toman dos operandos y retornar un valor booleano ya sea true o false, dependiendo del operador. Estos son utilizados en condicionales y ciclos.

- **_(==) Igualdad_**: Compara valores sin importar la diferencia de su tipo de dato `2 == '2'` va a ser `true`.

```js
const a = 5;
const b = 2;
const c = 'hello';

console.log(a == 5); // Output: true
console.log(b == '2'); // Output: true
console.log(c == 'Hello'); // Output:false
```

- **_(===) Igualdad estricta_**: Diferencia de los tipos de datos `2 == '2'` va a ser `false` dado que está comparando un `Number` con un `String`

```js
console.log(5 === 5); // Output: true
console.log(5 === '5'); // Output: false
console.log(5 === Number('5')); // Output: true
console.log(5 === 6); // Output: false
console.log('hello' === 'hello'); // Output:true 
```

- **_(!=) Desigualdad_**: Devuelve `true` si los operandos no son iguales, no diferencia entre tipos de datos.

```js
console.log(3 != 5); // Output: true
console.log(3 != 3); // Output: false
console.log(3 != '3'); // Output: false
console.log('hello' != 'Hello'); // Output:true 
```

Explicación `console.log('hello' != 'Hello')` las primeras letras son transformadas a Unicode 'H' y 'h'. Estos caracteres no tienen el mismo código por ende no son igual lo cual retorna ``true``.

- **_(!==) Desigualdad estricta_**: Devuelve `true` si los operandos no son iguales, diferencia de tipos de datos

```js
console.log(3 !== '3'); // Output: true
console.log(3 !== 3); // Output: false
console.log(3 !== '3'); // Output: true
console.log('hello' !== 'Hello'); // Output:true
```

- **_(\>) Mayor que_**: Devuelve `true` si el primer operando es mayor al segundo

```js
console.log(5 > 2); // Output: true
console.log(2 > 5); // Output: false
console.log(5 > '2'); // Output: true
console.log('hello' > 'Hello'); // Output:true 
```
Explicación: `console.log('hello' > 'Hello')` las primeras letras son transformadas a Unicode 'h' > 'H' y el código de 'h' es mayor al de 'H' por esta razón el output es `true`

- **_(<) Menor que_**: Devuelve `true` si el primer operando es menor al segundo

```js
console.log(2 < 5); // Output: true
console.log(5 < 2); // Output: false
console.log(2 < '5'); // Output: true
console.log('Hello' < 'hello'); // Output:true
```

- **_(>=) Mayor o igual que_**: Devuelve `true` si el primer operando es mayor o igual al segundo

```js
console.log(5 >= 2); // Output: true
console.log(2 >= 5); // Output: false
console.log(5 >= '2'); // Output: true
console.log('hello' >= 'Hello'); // Output:true
```

- **_(<=) Nenor o igual que_**: Devuelve `true` si el primer operando es menor o igual al segundo

```js
console.log(2 <= 5); // Output: true
console.log(5 <= 2); // Output: false
console.log(2 <= '5'); // Output: true
console.log('Hello' <= 'hello'); // Output:true
```

## Operadores lógicos

Los operadores lógicos se utilizan para combinar expresiones booleanas ya sean condiciones o variables

- **_&&_**: Es la representación del Y lógico, obliga a que dos o más condiciones tengan un valor verdadero para que retorne un true, de lo contrario retorna false
- **_||_**: Es la representación del O lógico, Si al menos una condición de dos o más condiciones es verdadera, retornará un true, de lo contrario retorna false
- **_!_**: El NO lógico, niega el valor de una expresión booleana, si es verdadero retorna false y si es falso retorna true

```js
console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(false && true); // Output: false
console.log(false && false); // Output: false

console.log(true || true); // Output: true
console.log(true || false); // Output: true
console.log(false || true); // Output: true
console.log(false || false); // Output: false

console.log(!true); // Output: false
console.log(!false); // Output: true

const x = 5;
const y = 3;
const z = 3;

console.log(x === y && x === z); // Output: false
console.log(x === y || y === z); // Output: true
console.log(!(x === y)); // Output: true
```

## Operadores de Cadena

Los operadores de cadena se utilizan para unir cadenas de texto

- **_(+) Concatenación_**: Permite la unión de dos o más cadenas de texto, también podemos utilizar los `template literals` `` para concatenar cadenas de texto y variables

```js
const nombre = 'Juan';
const apellido = 'Perez';

console.log(nombre + ' ' + apellido); // Output: Juan Perez
console.log('Hola ' + nombre + ' ' + apellido); // Output: Hola Juan Perez
console.log('Hola ' + nombre + ' ' + apellido + '\n' + 'Bienvenido');
/* Output: 
Hola Juan Perez
Bienvenido
*/

/* template literals */
console.log(`${nombre} ${apellido}`); // Output: Juan Perez
console.log(`Hola ${nombre} ${apellido}`); // Output: Hola Juan Perez
console.log(`Hola ${nombre} ${apellido} \nBienvenido`);
/* Output:
Hola Juan Perez
Bienvenido
*/
```

## Operadores unarios

Los operadores unarios se utilizan para realizar una operación en un solo operando

- **_delete_**: Elimina una propiedad de un objeto
- **_typeof_**: Devuelve el tipo de dato de una variable
- **_void_**: Ejecuta un fragmento de código sin retornar ningún valor. Su retorno siempre será undefined

```js
/* delete */
const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
};

console.log(persona); // Output: {nombre: "Juan", apellido: "Perez"}
delete persona.apellido;
console.log(persona); // Output: {nombre: "Juan"}

console.log(typeof 5); // Output: number
console.log(typeof '5'); // Output: string
console.log(typeof true); // Output: boolean

/* typeof */
const myFun = new Function('5 + 2');
const foo = ['Apple', 'Mango', 'Orange'];
const today = new Date();

console.log(typeof {}); // Output: object
console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object Explicación: null es un objeto en JavaScript
console.log(typeof myFun); // Output: function
console.log(typeof foo); // Output: object Explicación: los arreglos son objetos en JavaScript
console.log(typeof today); // Output: object Explicación: las fechas son objetos en JavaScript

/* void */
console.log(void 0); // Output: undefined
console.log(void 1); // Output: undefined
console.log(void 'hola'); // Output: undefined
console.log(void true); // Output: undefined

void function testFunction() {
  console.log('funcion ejecutada');
}; // Output: undefined e imprime en consola "funcion ejecutada"
testFunction(); // ejecuta la función testFunction
```

## Operadores relacionales

Los operadores relacionales comparan sus operandos y devuelven un valor `Boolean`

- **_instanceof_**: Determina si el objeto especificado (operando1) es del tipo de objeto especificado (operando 2) Sintaxis: `operando1 instanceof operando2`
- **_in_**: Determina si una propiedad pertenece a un objeto

```js
/* instanceof */
const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
};

console.log(persona instanceof Object); // Output: true
console.log(persona instanceof Array); // Output: false
console.log(persona instanceof Date); // Output: false

var now = new Date();
console.log(now instanceof Date)  // Output: true

/* in */
const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
};

if('nombre' in persona){
  console.log('La propiedad nombre existe en el objeto persona');
}

console.log('nombre' in persona); // Output: true
console.log('apellido' in persona); // Output: true
console.log('edad' in persona); // Output: false
```

Si desarrollas con JavaScript siempre vas a utilizar los operadores en tu diario vivir, es mejor conocer su funcionamiento y como utilizarlos correctamente. Espero que este artículo te haya sido de ayuda, si tienes alguna duda o sugerencia no dudes en escribirme.


```js

typeof {} 
typeof undefined
typeof null
delete 
void true
instanceof
in
true && true // Output: true
true && false // Output: false
false && true // Output: false
false && false // Output: false
true || true // Output: true
true || false // Output: true
false || true // Output: true
false || false // Output: false

```