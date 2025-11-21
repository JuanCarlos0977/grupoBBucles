// 1 Arrays

// Forma tradicional (no se suele usar en Javascript)
const letters1 = new Array("a", "b", "c");   // Array con 3 elementos
const letters2 = new Array(3);               // Array vacío de tamaño 3

// Mediante literales (notación preferida)
const letters3 = ["a", "b", "c"];  // Array con 3 elementos
const letters4 = [];               // Array vacío (0 elementos)
const letters5 = ["a", 5, true];   // Array mixto (String, Number, Boolean)


console.log("Creación de variables array");

console.log(letters1);
console.log(letters2);
console.log(letters3);
console.log(letters4);
console.log(letters5);

// Acceder a los elementos del array mediante su índice

console.log("Accedemos a un elemento del array por indice y lo mostramos en consola");

console.log(letters3[1]); // "a" - b
console.log(letters3[2]); // "b" - c
console.log(letters3[0]); // "c" - a

console.log(`${letters3[0]} , ${letters3[1]} - ${letters3[2]}`);

console.log("Sacamos en consola y html el array");

const divSalida1 = document.getElementById("salida1");

divSalida1.innerHTML = `

<h4>hola esto es un ejemplo array</h4><p>${letters3[0]} , ${letters3[1]} - ${letters3[2]}</p>
`;

// 2 Strings:

const string1 = "Una cadena primitiva";
const string2 = "También una cadena primitiva";
const string3 = `Otra cadena primitiva más`;

const string4 = new String("Un objeto String");


console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);


const divSalida2 = document.getElementById("salida2");

divSalida2.innerHTML = `<p>Muestro strings</p><p>${string1} , ${string2} - ${string3} y ${string4}</p>`;


// 3 Objetos:

let persona = {
  nombre: "Ana",
  edad: 30,
  profesion: "Ingeniera"
};

console.log("Sacamos en consola una consulta del objeto")

console.log(persona.nombre); // "Ana"
console.log(persona["edad"]); // 30


//Array de objetos

let estudiantes = [
  { nombre: "Carlos", edad: 30 },
  { nombre: "Maria", edad: 29 },
  { nombre: "Juan", edad: 28 }
];

console.log("array de objetos")

console.log(estudiantes[0].nombre); // "Carlos"
console.log(estudiantes[1]["edad"]); // 29


const divSalida3 = document.getElementById("salida3");

divSalida3.innerHTML = `<p>De la persona </p>
                        <p>El nombbre es:${persona.nombre}</p>
                        <p> la edad es: ${persona.edad}</p>
                        <p>La profesión es: ${persona.profesion}`;






// 4 Set


console.log("De un array con duplicados, los quitamos con Set");

// 1. Crear un Set desde un array con duplicados
const miArray = [1, 2, 2, 3, 4, 4, 4, 5];
const miSet = new Set(miArray);
// miSet ahora contiene: {1, 2, 3, 4, 5}

console.log(miArray);
console.log(miSet);

let nuevoArray1 = [...miSet];


console.log("Añadimos un elemento");
// 2. Añadir un elemento
miSet.add(6);
// miSet ahora contiene: {1, 2, 3, 4, 5, 6}

let nuevoArray2 = [...miSet];

console.log("Mostramos si existe un elemento el 3 y el 7");

// 3. Comprobar si un elemento existe
console.log(miSet.has(3)); // true
console.log(miSet.has(7)); // false



// 4. Eliminar un elemento
miSet.delete(2);
// miSet ahora contiene: {1, 3, 4, 5, 6}

// 5. Obtener el tamaño
console.log(miSet.size); // 5



// 6. Convertir a array de nuevo, para poder mostrar en html
let nuevoArray3 = [...miSet];
// nuevoArray ahora contiene: [1, 3, 4, 5, 6]

console.log(nuevoArray3)
//mostramos en html 
console.log("mostrar mi set en html")


const divSalida4 = document.getElementById("salida4");

divSalida4.innerHTML = `<p>Array inicial: ${miArray}</p>
                        <p>Con set quitamos duplicados: ${nuevoArray1}</p>
                        <p>Añadimos un elemento: ${nuevoArray2}</p>
                        <p>Quitamos el 2º elemento: ${nuevoArray3}`;
