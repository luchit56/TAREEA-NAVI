// Mensajes asociados a los árboles y copos de nieve
const messages = [
    "🎄 ¡Te deseo la mejor navidad si es que me pides con Papa Noel! 🎁",
    "🎅 ¡Olvidemos el muérdago, dame una señal y prometo ser más directo que Santa entregando regalos.! ❤️",
    "✨ ¡Un próspero Año Nuevo lleno de alegría te espera conmigo! 🎆",
    "❄️ ¡Dicen que la Navidad es mágica, pero creo que tú te llevaste toda la magia porque luces increíble todo el año! ❄️",
    "✨ ¡Sabes, ya no necesito luces navideñas. Tu sonrisa ilumina más que cualquier adorno! ⭐",
    "❄️ ¡Este año no le pedí nada a Santa, pero si tú apareces bajo mi árbol, sería el mejor regalo! 😊"
  ];
  
  // Mostrar mensaje al hacer clic en un árbol o copo de nieve
  function showMessage(itemNumber) {
    const messageBox = document.getElementById("messageBox");
    messageBox.textContent = messages[itemNumber - 1];
    messageBox.classList.remove("hidden");
    messageBox.style.display = "block";
  }