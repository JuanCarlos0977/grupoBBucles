const myJson = `{
  "name": "jon",
  "lastName": "Doe",
  "age": 40
  }`

let obj = JSON.parse(myJson);
console.log(obj);


//Usando el parámetro reviver
const myJson2= `{
  "p": 5,
  "x": 10,
  "y": 20,
  "z": 30
}`

let obj2 = JSON.parse(myJson2, (clave, valor) => {
  if (clave === "z") return valor * 2;
  return valor;
});

console.log(obj2);
