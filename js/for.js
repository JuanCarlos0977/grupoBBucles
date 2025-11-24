let salidafor = document.getElementById("salidafor");
salidafor.innerHTML = `<br>`;
const frutas = ["manzana", "pera", "kiwi", "platano"];

for(let i = 0; i < frutas.length; i++) {
    salidafor.innerHTML += i+": "+frutas[i] +  "<br>";

console.log(frutas[i]);
}

//ejemplo de for of
const colores = ["verde", "rojo", "blanco", "azul"];
let salidaforof = document.getElementById("salidaforof");
salidaforof.innerHTML += "<br>Colores<br>";
for(let color of colores) {
    salidaforof.innerHTML += color+ "<br>"
    console.log(color);
    
}

//ejemplo for in
const persona = {
    nombre: "Jose",
    edad: 120,
    direccion: "Bilbao"
};
let salidaforin = document.getElementById("salidaforin")

salidaforin.innerHTML += "<br>Persona<br>"
let input=1
const arr =["manzana", "pera", "mango"]
for (let i in arr) {

    if (i == input) {
        console.log("esto es lp que encontre:" + arr[i]);
    }
    else
    {
        console.log("no existe el indice");
    }
}

for (let clave in persona) {
    const linea = clave + ": " + persona[clave];
    salidaforin.innerHTML += linea + "<br>"
    console.log(linea);
}
for (let i = 0; i <= 9; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
    let salidacontinue = document.getElementById("salidacontinue");
    salidacontinue.innerHTML += i +"<br>";
}
for (let i = 0; i <= 9; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
    let salidabreack = document.getElementById("salidabreack");
    salidabreack.innerHTML += i +"<br>";
}