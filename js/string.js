

// 1. EJEMPLO SLICE //
  
  const texto1 = "Hola equipo, este es un ejemplo.";
    const pOriginal1 = document.getElementById("texto1original");
    const pCortado1 = document.getElementById("texto1cortado");
    const btn1 = document.getElementById("cortarPalabra");

    // Mostrar el texto original
    pOriginal1.textContent = "Texto original: " + texto1;

    btn1.addEventListener("click", () => {
      // Usamos slice para tomar solo los primeros 4 caracteres
      const cortado = texto1.slice(0, 4); // "Hola"
      pCortado1.textContent = "Texto cortado con slice: " + cortado;
    });


//2. EJEMPLO CHAR-AT //

    const texto2 = "Bootcamp Peñascal F5 2025";
    const pOriginal2 = document.getElementById("texto2original");
    const input = document.getElementById("indice");
    const btn2 = document.getElementById("mostrarChar");
    const pChar = document.getElementById("caracter");

    pOriginal2.textContent = "Texto original: " + texto2;

    btn2.addEventListener("click", () => {
      const i = parseInt(input.value); // convertir valor ingresado a número
      const c = texto2.charAt(i);
      pChar.textContent = `Carácter en el índice ${i}: "${c}"`;
});

