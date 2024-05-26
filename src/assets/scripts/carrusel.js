function moverPanel() {
    const section_naranja = document.querySelector(".section_gris__section_naranja");
    const items = section_naranja.children;
    const itemCount = items.length;

    // Inicializar una variable estática para rastrear el índice actual
    moverPanel.currentIndex = moverPanel.currentIndex || 0;

    // Remover la clase active del elemento actual
    items[moverPanel.currentIndex].classList.remove('active');

    // Actualizar el índice para la próxima iteración
    moverPanel.currentIndex = (moverPanel.currentIndex + 1) % itemCount;

    // Añadir la clase active al nuevo elemento
    items[moverPanel.currentIndex].classList.add('active');
}

// Función que activa el carrusel
function inicializar_carrusel() {
    window.setInterval(moverPanel, 5000);
}

window.onload = inicializar_carrusel;
