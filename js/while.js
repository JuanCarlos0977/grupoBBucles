let salida = document.getElementById("salida");
let i = 1
while (i <= 10) {
    console.log("Elemento" +i);
    
    salida.innerHTML += "Elemento" + i + "<br>";
    i++;
}

let num = 5;
do {
    console.log("item" + num);
    salida.innerHTML += "item" + num + "<br>";
    num --;
}
while(num >= 1);
