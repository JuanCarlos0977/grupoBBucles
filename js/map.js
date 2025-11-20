const numbers1 = [1, 2, 3, 4];
//con funcion flecha
const doubles1 = numbers1.map(num => num * 2);
console.log(doubles1);
//salida: numbers1 sigue siendo numbers1 = [1, 2, 3, 4] 
//        doubles ahora es doubles = [2, 4, 6, 8]

//con funcion tradicional
const numbers2 = [1, 5, 10, 15];
const doubles2 = numbers2.map(function (x) {
  return x * 2;
});
console.log(doubles2);
//salida: doubles2 = [2, 10, 20, 30]
//        numbers2 sigue siendo numbers2 = [1,5,10,15]


// manipulando y transformando valores
const fruits = ["manzana", "uvas", "naranja", "kiwi"];
const colorFruits = fruits.map(function (fruit, index) {

  fruit = fruit === "manzana" ? "manzana roja" : fruit
  fruit = fruit === "uvas" ? "uvas negras" : fruit
  fruit = fruit === "naranja" ? "naranja amarilla" : fruit
  fruit = fruit === "kiwi" ? "kiwi verde" : fruit

  return fruit;
});
console.log(fruits);
console.log(colorFruits);
// colorFruits es ahora colorFruist = ["manzana roja", "uvas negras", "naranja amarilla", "kiwi verde"]
// fruits sigue siendo fruits = ["manzana", "uvas", "naranja", "kiwi"]


//// usemos foreach para imprimir en el navegador
const divSalida1 = document.querySelector("#salida")
const divSalida2 = document.querySelector("#salida2")
const divSalida3 = document.querySelector("#salida3")

function generarHtml ({
  varnameInit: varnameInit,
  varnameMod: varnameMod,
  arrayInit: arrayInit,
  arrayMod: arrayMod
}){
  let salidaHtml =``

  salidaHtml = `<h3>${varnameInit} sigue siendo:</h3> `
  
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

divSalida1.innerHTML = generarHtml({varnameInit: "numbers1", varnameMod: "doubles1", arrayInit: numbers1, arrayMod: doubles1 })
divSalida2.innerHTML = generarHtml({varnameInit: "numbers2", varnameMod: "doubles2", arrayInit: numbers2, arrayMod: doubles2 })
divSalida3.innerHTML = generarHtml({varnameInit: "fruits", varnameMod: "colorFruits", arrayInit: fruits, arrayMod: colorFruits })




