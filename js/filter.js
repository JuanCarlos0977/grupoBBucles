// con funcion flecha
const numbers = [1, 2, 3, 4, 5];
const major = numbers.filter(num => num > 3);
console.log(major); // [4, 5]

const words = ["spray", "elite", "exuberant", "destruction", "present"];
const longWords = words.filter((word) => word.length > 6);

console.log(longWords);
// Expected output: longWord ["exuberant", "destruction", "present"]

//usando funcion tradicional
function checkAdult(age) {
  return age >= 18;
}

const ages = [14, 32, 17, 33, 16, 40];

const filterAdults = ages.filter(checkAdult);
console.log(filterAdults);




//// usemos foreach para imprimir en el navegador
const divSalida1 = document.querySelector("#salida")
const divSalida2 = document.querySelector("#salida2")

function generarHtml ({
  varnameInit: varnameInit,
  varnameMod: varnameMod,
  arrayInit: arrayInit,
  arrayMod: arrayMod
}){
  let salidaHtml =``

  salidaHtml = `<h3>${varnameInit} sigue siendo:</h3>`
  
  arrayInit.forEach(function (element, index){
    salidaHtml += `<p>${varnameInit}[${index}] : "${element}"</p>`
    console.log(`${varnameInit}[${index}] =  ${element} `)
  })

  salidaHtml += `<h3>${varnameMod} ahora es:</h3>`

  arrayMod.forEach(function (element, index){
    salidaHtml += `<p>${varnameMod}[${index}] : "${element}"</p>`
    console.log(`${varnameMod}[${index}] =  ${element} `)
  })

  console.log(salidaHtml);
  return salidaHtml;

}

divSalida1.innerHTML = generarHtml({varnameInit: "words", varnameMod: "longWords", arrayInit: words, arrayMod: longWords })
divSalida2.innerHTML = generarHtml({varnameInit: "ages", varnameMod: "filterAdults", arrayInit: ages, arrayMod: filterAdults })
