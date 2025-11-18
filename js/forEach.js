//capturamos un elemento del html para imprimir resultados en el navegador
const divSalida = document.querySelector("#salida")
let salidaHtml = ``
const myArray1 = ["elemento a", "elemento b", "elemento c"]

//usando foreach con funcion flecha
myArray1.forEach((element, index) => {
    salidaHtml += `<p>myArray1[${index}] : "${element}"</p>`
    console.log(`myArray1[${index}] =  ${element}`)
})
//imprimir en el div el resultado procesado por el foreach
divSalida.innerHTML = salidaHtml

// salida:
// myArray1[0] =  elemento a
// myArray1[1] =  elemento b
// myArray1[2] =  elemento c


//
//capturamos un elemento del html para imprimir resultados en el navegador
const divSalida2 = document.querySelector("#salida2")
let salidaHtml2 = ``

//usando foreach con funcion tradicional
function logArrayElements(element, index, myArray2) {
    salidaHtml2 += `<p>myArray2[${index}] : "${element}"</p>`
    console.log(`myArray2[${index}] =  ${element} `)
}
const myArray2 = [2,5,,9]
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array

myArray2.forEach(logArrayElements)

divSalida2.innerHTML=salidaHtml2

// salida:
// myArray2[0] =  2 
// myArray2[1] =  5
// myArray2[3] =  9