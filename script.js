document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.getElementById('carrusel-tarjetas');
    const tarjetas = Array.from(carrusel.querySelectorAll('.tarjeta'));
    let currentIndex = 1; // El índice de la tarjeta central visible (Jake Edwards)

    /**
     * Aplica las clases de visibilidad y posición a todas las tarjetas
     */
    function updateCarrusel() {
        tarjetas.forEach((tarjeta, index) => {
            // Limpiar clases anteriores
            tarjeta.className = 'tarjeta';

            if (index === currentIndex) {
                // Tarjeta central
                tarjeta.classList.add('central');
            } else if (index === (currentIndex - 1 + tarjetas.length) % tarjetas.length) {
                // Tarjeta que va arriba (la anterior en el ciclo)
                tarjeta.classList.add('arriba');
            } else if (index === (currentIndex + 1) % tarjetas.length) {
                // Tarjeta que va abajo (la siguiente en el ciclo)
                tarjeta.classList.add('abajo');
            } else {
                // Tarjetas ocultas (si hay más de 3)
                tarjeta.classList.add('oculto');
            }
        });
    }

    /**
     * Mueve el carrusel a la siguiente tarjeta
     */
    function rotateCarrusel() {
        // Mover el índice al siguiente, ciclando si llega al final
        currentIndex = (currentIndex + 1) % tarjetas.length;
        updateCarrusel();
    }

    // 1. Inicializar el carrusel al cargar la página
    updateCarrusel(); 

    function getPromoText(minutos, segundos) {
        const tiempoFormato = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
        
        // --- 1. Regla para Teléfonos MUY ESTRECHOS (ej. 320px) ---
        if (window.innerWidth <= 350) {
            // El mensaje más corto posible: "¡OFERTA! 15:00"
            return `¡OFERTA! <span class="timer">${tiempoFormato}</span>`;
        }
        
        // --- 2. Regla para Móviles Estándar (351px a 600px) ---
        else if (window.innerWidth <= 600) {
            // Mensaje corto anterior: "⏳ Oferta finaliza en 15:00"
            return `⏳ Finaliza en <span class="timer">${tiempoFormato}</span>`;
        } 
        
        // --- 3. Regla para Escritorio (> 600px) ---
        else {
            return `🌟 ¡Promoción por tiempo limitado! Termina en <span class="timer">${tiempoFormato}</span>`;
        }
    }
    
    // 2. Configurar la rotación automática cada 6 segundos
    setInterval(rotateCarrusel, 6000); // 6000ms = 6 segundos
    
});