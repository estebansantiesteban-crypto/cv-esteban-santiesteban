const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
const form = document.getElementById('form-contacto');
const estado = document.getElementById('mensaje-estado');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        estado.textContent = 'Por favor completa todos los campos.';
        estado.style.color = 'red';
    } else {
        estado.textContent = '¡Mensaje enviado con éxito!';
        estado.style.color = 'green';
        form.reset();
    }
});