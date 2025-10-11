document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecciona todos los elementos de pregunta
    const preguntas = document.querySelectorAll('.faq-question');

    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', () => {
            // El elemento padre es el .faq-item completo
            const item = pregunta.closest('.faq-item');
            
            // Cierra todos los demás acordeones
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Alterna la clase 'active' en el elemento clickeado
            item.classList.toggle('active');
        });
    });
});