# README: Conceptos Fundamentales de Listas, Bucles y JSON en JavaScript

Este proyecto en grupo reúne definiciones, ejemplos prácticos y explicaciones de los conceptos esenciales relacionados con **listas, variables, bucles y JSON** en JavaScript. Su objetivo es servir como guía de estudio y referencia rápida.

---

# 1. Variables de Listas

Las listas en JavaScript pueden representarse de diferentes maneras:

## Tipos
- **Arrays**: Listas ordenadas de elementos.
- **Strings**: Cadenas de texto tratadas como listas de caracteres.
- **Objetos**: Colecciones de propiedades clave–valor.
- **Otros (Set)**: Estructuras de datos que almacenan valores únicos.

## Creación y Comandos
### Declaración, Instanciación y Asignación
```js
let numeros = [1, 2, 3];
let mensaje = "Hola";
let persona = { nombre: "Ana", edad: 20 };
let conjunto = new Set([1, 2, 3]);
```

## Scope – Ámbito
- **Global**: Accesible desde cualquier parte del código.
- **Local**: Disponible solo dentro de funciones o bloques.

---

# 2. Métodos y Atributos de Listas

## Métodos de Cadena (Strings)
- **slice()**: Extrae una parte de la cadena.
- **substr()**: Devuelve una parte de la cadena basado en posición y longitud.
- **charAt()**: Devuelve el carácter en una posición específica.
- **indexOf()**: Devuelve la posición de un substring.

```js
"Hola".slice(1);     // "ola"
"Hola".charAt(0);    // "H"
"Hola".indexOf("a"); // 3
```

## Métodos de Arrays y Objetos
### Básicos
- **push()**, **pop()**, **shift()**, **unshift()**
- **find()**, **findIndex()**
- **includes()**

### Conversión
- **split()**: String → Array
- **join()**: Array → String

```js
"a,b,c".split(","); // ["a", "b", "c"]
[1,2,3].join("-");    // "1-2-3"
```

---

# 3. Bucles – Iteraciones

## Definición
Estructuras de control que repiten un bloque de código.

## Tipos
### **for**
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### **for...in** (itera claves de objetos)
```js
for (let key in persona) {
  console.log(key);
}
```

### **for...of** (itera valores de arrays o iterables)
```js
for (let num of [1,2,3]) {
  console.log(num);
}
```

### **while**
```js
let i = 0;
while (i < 5) {
  i++;
}
```

### **do...while**
```js
let i = 0;
do {
  i++;
} while (i < 5);
```

### **break** y **continue**
```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
}
```

---

# 4. Bucles de Alto Rendimiento

## forEach
```js
[1,2,3].forEach(n => console.log(n));
```

## map
```js
const dobles = [1,2,3].map(n => n * 2);
```

## filter
```js
const mayores = [1,2,3,4].filter(n => n > 2);
```

---

# 5. Objetos JSON vs Objetos JavaScript

## JSON (String)
Formato de texto para intercambio de datos.
```json
{"nombre": "Ana", "edad": 25}
```

## Objetos JavaScript
Estructuras reales con métodos.
```js
const persona = { nombre: "Ana", edad: 25 };
```

---

# 6. Métodos y Funciones JSON

## JSON.parse()
Convierte texto JSON → Objeto JS.
```js
JSON.parse('{"a":1}');
```

## JSON.stringify()
Convierte Objeto JS → JSON String.
```js
JSON.stringify({ a: 1 });
```

---

# 7. Ejemplos Prácticos
- Manipulación de listas.
- Transformación de cadenas.
- Conversión de estructuras.
- Iteraciones con distintos bucles.
- Envío y recepción de datos JSON.

---

Este README funciona como base para el proyecto grupal: cada miembro puede añadir ejemplos ampliados, diagramas o ejercicios para profundizar en los temas.


Profesor: Andres Osina https://github.com/andres63teacher

Dev's:

Ramiro Navas: https://github.com/ramironavas
Juan Carlos:  https://github.com/JuanCarlos0977
Anna Nikolenko: https://github.com/ganna1977
Yoandres La Cruz: https://github.com/ylcruzdev

