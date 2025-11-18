let salida = document.getElementById("salida");
salida.innerHTML = `<div class="hola-js">Hola</div><br><br>`;
const frutas = ["manzana", "pera", "kiwi", "platano"];


for(let i = 0; i < frutas.length; i++) {
    salida.innerHTML += frutas[i] +  "<br>";

console.log(frutas[i]);
}
const colores = ["verde", "rojo", "blanco", "azul"];
salida.innerHTML += "<br>Colores<br>";
for(let color of colores) {
    salida.innerHTML += color + "<br>"
    console.log(color);
    
}
const persona = {
    nombre: "Juan",
    edad: 35,
    direccion: "Bilbao"
};
salida.innerHTML += "<br>Persona<br>"
for (let clave in persona) {
    const linea = clave + ":" + persona[clave];
    salida.innerHTML += linea + "<br>"
    console.log(linea);
}
for (let i = 0; i <= 9; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
    salida.innerHTML += i +"<br>";
}
for (let i = 0; i <= 9; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
    salida.innerHTML += i +"<br>";
}