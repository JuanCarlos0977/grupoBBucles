//ejemplos while
let salidawhile = document.getElementById("salidawhile");
let i = 1
while (i <= 10) {
    console.log("Elemento" +i);
    
    salidawhile.innerHTML += i + ": " + "Elemento" + i + "<br>";
    i++;
}
//ejemplos do while
let salidadowhile = document.getElementById("salidadowhile");
let num = 5;
do {
    console.log("item" + num);
    salidadowhile.innerHTML += num +": " +"item" + num + "<br>";
    num --;
}
while(num >= 1);
