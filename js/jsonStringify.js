//pasando un objeto solamente
let objectJs = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
let jsonString = JSON.stringify(objectJs);

console.log(jsonString);


//usando una funcion para el parametro replacer

function replacer(key, value) {
  // Filtrando propiedades
  return typeof value === "string" ? undefined : value

}

let objectJs2 = {
  name: "jon",
  skill: "javaScript",
  task: 30,
  age: "21",
  projects: 3,
  commits: 200
};
let jsonString2 = JSON.stringify(objectJs2, replacer);
console.log(jsonString2);
// salida: '{"task":30, "projects":3, "commits": 200}'


//Si el reemplazo es un array, los valores indican los nombres de las propiedades del objeto que se va a incluir en la cadena JSON resultado.
let jsonString3 = JSON.stringify(objectJs2, ["name", "skill", "age"]);
console.log(jsonString3);
// salida: '{"name":"jon","skill":"javascript","age":"21"}', sólo mantiene las propiedades de "name", "skill" y "age"

//usando argumento space
let jsonString4 = JSON.stringify(objectJs2, null, " ");
console.log(jsonString4);
/* salida:
{
 "name": "jon",
 "skill": "javaScript",
 "task": 30,
 "age": "21",
 "projects": 3,
 "commits": 200
}
*/


//Usar el carácter tabulador simula la apariencia de impresión:
let jsonString5 = JSON.stringify(objectJs2, null, "\t");
console.log(jsonString5);

/* devuelve el string:
{
    "name": "jon",
    "skill": "javaScript",
    "task": 30,
    "age": "21",
    "projects": 3,
    "commits": 200
}
*/

//// para imprimir en el navegador
const divSalida1 = document.querySelector("#salida")
const divSalida2 = document.querySelector("#salida2")
const divSalida3 = document.querySelector("#salida3")
const divSalida4 = document.querySelector("#salida4")

divSalida1.innerHTML = `<p class="text-json">${jsonString}</p>`
divSalida2.innerHTML = `<p class="text-json">${jsonString2}</p>`
divSalida3.innerHTML = `<p class="text-json">${jsonString3}</p>`
divSalida4.innerHTML = `<div>
                        <pre class="codeConsole"><code>${jsonString4}</code></pre>
                        <pre class="codeConsole"><code>${jsonString5}</code></pre>
                        </div>`
