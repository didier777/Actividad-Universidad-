const form = document.getElementById('reviewForm');

// Manejo del envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Crear un nuevo objeto de reseña
    const newReview = { name, message };

    // Guardar en Local Storage
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(savedReviews));

    // Limpiar el formulario
    form.reset();
    alert('¡Gracias por tu reseña!');
});
