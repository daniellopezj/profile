---
title: operadores en javascript
image: first-post.jpg
icon: /icons/JavaScript.webp
status: public
tags:
  - 💻 Desarrollo
time: 5 minutos de lectura
sitemap: false
---

En JavaScript, un operador es un simbolo especial utilizado para realizar operaciones sobre algún valor o una variable

>  Es necesario conocer la diferencia entre operador y operando. El operador son los simbolos que realizan la acción por ejemplo (+,-,\*,/) entre otros. Los operandos son los valores o variables que van a ser ejecutadas por el operador por ejemplo (1, 2, x , y)

JavaScript cuenta con operadores binarios y unitarios, ademas un operador ternario tambien llamado operador condicional.

El operador binario requiere dos o mas operando, ya sean variables o valores.

```js
x * y; //  Operandos x,y Operador (*)
x + y + z; //  Operandos x,y,z Operador (+)
```

Los operadores unitarios solo requieren un operando, ya sea antes o despues del operador. 

```js
cont++; //  Operando 'cont' Operador (++)
cont--; //  Operando 'cont' Operador (--)
!exist; //  Operando 'exist' Operador (!)
typeof texto; //  Operando texto Operador (typeOf)
```

y el operador ternario es el unico que utiliza tres operandos `(un if/else abreviado)

```js
condition ? val1 : val2;
```

si la condición es `true` retorna el primer valor `val1` de lo contrario, retorna el segundo valor `val2`
aqui algunos ejemplos

```js
const edad = 18;
const mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mensaje); // Resultado: "Eres mayor de edad"

const numero = 7;
const esPar = numero % 2 === 0 ? 'Es par' : 'Es impar';
console.log(esPar); // Resultado: "Es impar"
```

Los operadores en JavaScript son clasificados en tipos, aqui te dejo los mas usados.

- 🔹 [Operadores aritméticos](#operadores-aritméticos)
- 🔹 [Operadores de asignación](#operadores-de-asignación)
- 🔹 [Operadores de comparación](#operadores-de-comparación)
- 🔹 [Operadores lógicos](#operadores-lógicos)
- 🔹 [Operadores de Cadena](#operadores-de-cadena)
- 🔹 [Operadores unitarios](#operadores-unitarios)
- 🔹 [Operadores relacionales](#operadores-relacionales)

## Operadores aritméticos

Los operadores aritméticos se utilizan para realizar operaciones matemáticas básicas.

- `+` ***suma***
- `-` ***resta***
- `*` ***multiplicación***
- `++` ***Incremento***: Agrega uno al valor del operando
- `--` ***decremento***: disminuye uno al valor del operando
- `**` ***exponencial***
- `%` ***módulo***: devuelve el residuo entre dividir dos operandos

```js
const x = 5;
const y = 10;

console.log(x + y); // Output: 15
console.log(x - y); // Output: -5
console.log(x * y); // Output: 50
console.log(x / y); // Output: 0.5
console.log(x % y); // Output: 5
console.log(x % y); // Output: 5
console.log(2**3); // Output: 8

let d = 3
let f = 3
console.log(d++) //Output: 3 Explicación: devuelve 3 y el valor de 'd' se establece en 4
console.log(++f) //Output: 4 Explicación: El valor se asigna a 'm' y devuelve 4

let g = 3
let h = 3
console.log(g--) //Output: 3 Explicación: devuelve 3 y el valor de 'g' se establece en 2
console.log(--h) //Output: 4 Explicación: El valor se asigna a 'h' y devuelve 3


```

## Operadores de asignación

Los operadores de asignación se utilizan para asignar valores a variables. El operador de asignación simple es el igual (=) y los compuestos son abreviación de operaciones como las siguientes.

- `+=` ***suma y asignación***
- `-=` ***resta y asignación***
- `*=` ***multiplicación y asignación***
- `/=` ***división y asignación***
- `%=` ***módulo y asignación***
- `**=` ***exponencial y asignación***

```js
let x = 10;
let y = 5;

x = y; // Equivalente a x =  y;
console.log(x); // Output: 5

x += y; // Equivalente a x = x + y;
console.log(x); // Output: 15

x -= y; // Equivalente a x = x - y;
console.log(x); // Output: 10

x *= y; // Equivalente a x = x * y;
console.log(x); // Output: 50

x /= y; // Equivalente a x = x / y;
console.log(x); // Output: 10

x %= y; // Equivalente a x = x % y;
console.log(x); // Output: 0

let a = 2;
let b = 3;
a **= b; // Equivalente a x = x ** y;
console.log(a); // Output: 8
```

## Operadores de comparación

Los operadores de comparación toman dos operandos y retornar un valor booleano ya sea true o false, dependiendo del operador. Estos son utilizados en condicionales y ciclos.

- `==` ***igualdad***: El operador (==) no diferencia entre tipos de datos, `2 == '2'` va a ser `true` sin importar que los operandos tengan tipo de dato diferente
```js
const a = 5;
const b = 2;
const c = 'hello';

console.log(a == 5); // Output: true
console.log(b == '2'); // Output: true 
console.log(c == 'Hello'); // Output:false
```

- `===` ***igualdad estricta***:  Diferencia de los tipos de datos  `2 == '2'` va a ser `false` dado que esta comparando un `Number` con  un `String`
```js
console.log(5 === 5); // Output: true
console.log(5 === '5'); // Output: false 
console.log(5 === Number('5')); // Output: true 
console.log(5 === 6); // Output: false 
console.log('hello' === 'hello'); // Output:true
```

- `!=` ***desigualdad: Devuelve*** `true` si los operandos no son iguales, no diferencia entre tipos de datos. 
```js
console.log(3 != 5); // Output: true
console.log(3 != 3); // Output: false 
console.log(3 != '3'); // Output: false 
console.log('hello' != 'Hello'); // Output:true
```

- `!==` ***desigualdad estricta***: Devuelve `true` si los operandos no son iguales, diferencia de tipos de datos
```js
console.log(3 !== '3'); // Output: true
console.log(3 !== 3); // Output: false 
console.log(3 !== '3'); // Output: true 
console.log('hello' !== 'Hello'); // Output:true
```

- `>` ***mayor que***:
```js
console.log(5 > 2); // Output: true
console.log(2 > 5); // Output: false 
console.log(5 > '2'); // Output: true 
console.log('hello' > 'Hello'); // Output:true
```
- `<` ***menor que***
```js
console.log(2 < 5); // Output: true
console.log(5 < 2); // Output: false 
console.log(2 < '5'); // Output: true 
console.log('Hello' < 'hello'); // Output:true
```
- `>=` ***mayor o igual que***
```js
console.log(5 >= 2); // Output: true
console.log(2 >= 5); // Output: false 
console.log(5 >= '2'); // Output: true 
console.log('hello' >= 'Hello'); // Output:true
```
- `<=` ***menor o igual que***
```js
console.log(2 <= 5); // Output: true
console.log(5 <= 2); // Output: false 
console.log(2 <= '5'); // Output: true 
console.log('Hello' <= 'hello'); // Output:true
```

## Operadores lógicos

Los operadores lógicos se utilizan para combinar expresiones booleanas. Aquí están los operadores lógicos en JavaScript:

- `&&` ***Y lógico***
- `||` ***O lógico***
- `!` ***No lógico***

## Operadores de Cadena

Los operadores de cadena se utilizan para concatenar cadenas de texto. Aquí está el operador de cadena en JavaScript:

- `+` ***concatenación***

## Operadores unarios

Los operadores unitarios se utilizan para realizar operaciones en un solo operando. Aquí están los operadores unitarios en JavaScript:
- ***delete***
- ***typeof***
- ***void***

## Operadores relacionales

Los operadores relacionales se utilizan para comparar valores. Aquí están los operadores relacionales en JavaScript:

- `instanceof` ***instancia de***
- `in` ***propiedad de***
