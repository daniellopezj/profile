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

Es necesario conocer la diferencia entre operador y operando. El operador son los simbolos que realizan la acción por ejemplo (+,-,*,/) entre otros. Los operandos son los valores o variables que van a ser ejecutadas por el operador por ejemplo (1, 2, x , y)

JavaScript cuenta con operadores binarios y unitarios, ademas un operador ternario tambien llamado operador condicional.

El operador binario requiere dos o mas operando, ya sean variables o valores.

```js
x * y;     //  Operandos x,y Operador (*)
x + y + z; //  Operandos x,y,z Operador (+)
```

Los operadores unitarios solo requieren un operando, ya sea antes o despues del operador.

```js
cont++; //  Operando 'cont' Operador (++)
cont--; //  Operando 'cont' Operador (--)
!exist; //  Operando 'exist' Operador (!)
typeof texto //  Operando texto Operador (typeOf)
```

y el operador ternario es el unico que utiliza tres operandos `(un if/else abreviado)

```js
condition ? val1 : val2

```
si la condición es `true` retorna el primer valor `val1` de lo contrario, retorna el segundo valor `val2`
aqui algunos ejemplos 


```js
const edad = 18;
const mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // Resultado: "Eres mayor de edad"

const numero = 7;
const esPar = numero % 2 === 0 ? "Es par" : "Es impar";
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

Los operadores aritméticos se utilizan para realizar operaciones matemáticas básicas. Aquí están los operadores aritméticos en JavaScript:

- `+` (suma)
- `-` (resta)
- `*` (multiplicación)
- `/` (división)
- `%` (módulo)

## Operadores de asignación

Los operadores de asignación se utilizan para asignar valores a variables. Aquí están los operadores de asignación en JavaScript:

- `=` (asignación)
- `+=` (suma y asignación)
- `-=` (resta y asignación)
- `*=` (multiplicación y asignación)
- `/=` (división y asignación)
- `%=` (módulo y asignación)

## Operadores de comparación

Los operadores de comparación se utilizan para comparar valores. Aquí están los operadores de comparación en JavaScript:

- `==` (igualdad)
- `!=` (desigualdad)
- `>` (mayor que)
- `<` (menor que)
- `>=` (mayor o igual que)
- `<=` (menor o igual que)
- `===` (igualdad estricta)

## Operadores lógicos

Los operadores lógicos se utilizan para combinar expresiones booleanas. Aquí están los operadores lógicos en JavaScript:

- `&&` (y lógico)
- `||` (o lógico)
- `!` (no lógico)

## Operadores de Cadena

Los operadores de cadena se utilizan para concatenar cadenas de texto. Aquí está el operador de cadena en JavaScript:

- `+` (concatenación)

## Operadores unitarios

Los operadores unitarios se utilizan para realizar operaciones en un solo operando. Aquí están los operadores unitarios en JavaScript:

- `++` (incremento)
- `--` (decremento)
- `+` (identidad)
- `-` (negación)

## Operadores relacionales

Los operadores relacionales se utilizan para comparar valores. Aquí están los operadores relacionales en JavaScript:

- `instanceof` (instancia de)
- `in` (propiedad de)
