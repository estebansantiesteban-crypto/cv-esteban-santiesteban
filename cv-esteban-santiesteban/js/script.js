document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MODO CLARO / OSCURO (THEME TOGGLE)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme_toggle_btn');
    const themeIcon = document.getElementById('theme_icon');
    const body = document.body;

    // Cargar tema guardado en localStorage si existe
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.replace('light_theme', 'dark_theme');
        themeIcon.textContent = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark_theme');
        
        if (isDark) {
            body.classList.replace('dark_theme', 'light_theme');
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.replace('light_theme', 'dark_theme');
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });

    // ==========================================
    // 2. VALIDACIÓN DEL FORMULARIO DE CONTACTO
    // ==========================================
    const contactForm = document.getElementById('contact_form');
    const nameInput = document.getElementById('user_full_name');
    const emailInput = document.getElementById('user_email');
    const subjectInput = document.getElementById('user_subject');
    const messageInput = document.getElementById('user_message');
    const formFeedback = document.getElementById('form_feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        clearErrors();
        let isValid = true;

        // Validar Nombre
        if (nameInput.value.trim() === '') {
            showError('error_name', 'El nombre es obligatorio.');
            isValid = false;
        } else if (nameInput.value.trim().length < 3) {
            showError('error_name', 'El nombre debe tener al menos 3 caracteres.');
            isValid = false;
        }

        // Validar Correo Electrónico con Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            showError('error_email', 'El correo electrónico es obligatorio.');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            showError('error_email', 'Ingrese un correo electrónico válido.');
            isValid = false;
        }

        // Validar Asunto
        if (subjectInput.value.trim() === '') {
            showError('error_subject', 'El asunto es obligatorio.');
            isValid = false;
        }

        // Validar Mensaje
        if (messageInput.value.trim() === '') {
            showError('error_message', 'El mensaje no puede estar vacío.');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError('error_message', 'El mensaje debe tener al menos 10 caracteres.');
            isValid = false;
        }

        // Feedback al usuario
        if (isValid) {
            formFeedback.textContent = '¡Mensaje enviado con éxito! Gracias por contactarme.';
            formFeedback.className = 'form_feedback success';
            contactForm.reset();

            setTimeout(() => {
                formFeedback.textContent = '';
                formFeedback.className = 'form_feedback';
            }, 5000);
        } else {
            formFeedback.textContent = 'Por favor, corrija los campos marcados antes de enviar.';
            formFeedback.className = 'form_feedback error';
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrors() {
        const errorSpans = document.querySelectorAll('.error_message');
        errorSpans.forEach(span => span.textContent = '');
        formFeedback.textContent = '';
        formFeedback.className = 'form_feedback';
    }
});