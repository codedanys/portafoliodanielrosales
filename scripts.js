// Conectar el formulario con EmailJS
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe por defecto

    const serviceID = "service_c2e2s13"; // Reemplaza con tu Service ID
    const templateID = "template_t1y58i9"; // Reemplaza con tu Template ID

    // Datos del formulario
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Usar EmailJS para enviar el correo
    emailjs
        .send(serviceID, templateID, templateParams)
        .then(
            () => {
                alert("¡Mensaje enviado exitosamente! Me pondré en contacto pronto.");
                document.getElementById("contact-form").reset(); // Limpiar el formulario
            },
            (error) => {
                alert("Ocurrió un error al enviar el mensaje. Por favor, inténtalo nuevamente.");
                console.error("Error:", error);
            }
        );
});
