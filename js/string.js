

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

//3. EJEMPLO INDEX-OF //

    // Lista de frutas
    const frutas = ["manzana", "banana", "cereza", "durazno", "naranja", "piña", "kiwi"];

    // Función para buscar fruta usando indexOf
    function buscarFruta() {
      const fruta = document.getElementById("frutaInput").value.trim();
      const posicion = frutas.indexOf(fruta);

      const resultado = document.getElementById("resultado");

      if (posicion !== -1) {
        resultado.textContent = `La fruta "${fruta}" está en la posición ${posicion}.`;
      } else {
        resultado.textContent = `La fruta "${fruta}" no se encuentra en la lista.`;
      }
    }

    //4. EJEMPLOS SPLIT Y JOIN //

        function procesarTexto() {
      // 1. Tomar el texto del input
      const texto = document.getElementById("inputTexto").value.trim();

      // 2. Usar split() para convertir el texto en un array de palabras
      const listaPalabras = texto.split(" "); // separa por espacios
      document.getElementById("lista").textContent = 
        "Array de palabras: [" + listaPalabras.join(", ") + "]";

      // 3. Usar join() para unir las palabras con guiones
      const textoUnido = listaPalabras.join("-");
      document.getElementById("textoUnido").textContent = 
        "Texto unido con guiones: " + textoUnido;
    }
