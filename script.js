// Cambiar "Iniciar sesión" a "Cerrar sesión"
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", () => {
    loginButton.textContent =
        loginButton.textContent === "Iniciar sesión" ? "Cerrar sesión" : "Iniciar sesión";
});

// Ocultar el botón "Agregar definición"
const addDefinitionButton = document.getElementById("add-definition-button");
addDefinitionButton.addEventListener("click", () => {
    addDefinitionButton.style.display = "none";
});

// Función para manejar los "Me gusta"
const likeButtons = document.querySelectorAll(".like-button");
likeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const definition = event.target.closest(".definition");
        const title = definition.querySelector("h3").textContent;
        alert(`Te gustó la definición: "${title}"`);

        // Incrementar el conteo de likes
        const likeCount = definition.querySelector(".like-count");
        let currentLikes = parseInt(likeCount.textContent.split(" ")[0], 10);
        likeCount.textContent = `${currentLikes + 1} ❤️`;
    });
});