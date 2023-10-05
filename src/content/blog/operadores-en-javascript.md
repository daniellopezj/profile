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

Los operadores en JavaScript pueden ser de los siguientes tipos 

- 🔹 **Operadores aritméticos**
- 🔹 **Operadores de asignación**
- 🔹 **Operadores de comparación**
- 🔹 **Operadores lógicos**
- 🔹 **Operadores de Cadena**
- 🔹 **Operadores unitarios**
- 🔹 **Operadores relacionales**
