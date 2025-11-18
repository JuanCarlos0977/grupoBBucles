
// Forma tradicional (no se suele usar en Javascript)
const letters1 = new Array("a", "b", "c");   // Array con 3 elementos
const letters2 = new Array(3);               // Array vacío de tamaño 3

// Mediante literales (notación preferida)
const letters3 = ["a", "b", "c"];  // Array con 3 elementos
const letters4 = [];               // Array vacío (0 elementos)
const letters5 = ["a", 5, true];   // Array mixto (String, Number, Boolean)

console.log(letters1);
console.log(letters2);
console.log(letters3);
console.log(letters4);
console.log(letters5);

// Acceder a los elementos del array mediante su índice
console.log(letters3[0]); // "a"
console.log(letters3[1]); // "b"
console.log(letters3[2]); // "c"

console.log(`${letters3[0]} , ${letters3[1]} - ${letters3[2]}`);

const salida = document.getElementById("salida");

salida.innerHTML = `

<h1>hola esto es un ejemplo array</h1><p>${letters3[0]} , ${letters3[1]} - ${letters3[2]}</p>
`;