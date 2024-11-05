// Función para guardar reseñas en localStorage
function guardarReseñaEnLocalStorage(nombre, mensaje, fecha) {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.push({ name: nombre, message: mensaje, date: fecha });
    localStorage.setItem('reviews', JSON.stringify(savedReviews));
}

//
// Función para agregar una reseña al DOM
function agregarReseña(nombre, mensaje, fecha) {
    const reviewList = document.getElementById('reviewList');

    // Crear tarjeta de reseña
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review');

    // Crear contenido de la reseña con autor y fecha en líneas separadas
    reviewCard.innerHTML = `
        <div class="review-author">
            <strong>Autor:</strong> ${nombre} <br>
            <strong>Fecha:</strong> ${fecha}
        </div>
        <p>${mensaje}</p>
    `;

    // Añadir la reseña al contenedor de reseñas
    reviewList.appendChild(reviewCard);
}

// Función para cargar reseñas desde localStorage al iniciar
document.addEventListener('DOMContentLoaded', function() {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.forEach(review => {
        agregarReseña(review.name, review.message, review.date || new Date().toLocaleDateString());
    });
});

// Manejo del envío del formulario
const form = document.getElementById('reviewForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const fecha = new Date().toLocaleDateString();

    agregarReseña(name, message, fecha);
    guardarReseñaEnLocalStorage(name, message, fecha);

    form.reset();
    alert('¡Gracias por tu reseña!');
});
