// Registrar Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
        .then(() => console.log("Service Worker registrado"))
        .catch(error => console.log("Error al registrar Service Worker:", error));
}

// Pregunta inicial
document.getElementById("yes-button").addEventListener("click", function () {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
});

document.getElementById("no-button").addEventListener("click", function () {
    const messages = ["Por favor, dime que sí 🥺", "No me hagas esto 💔", "Te amo, acepta 🙏"];
    document.getElementById("plea-message").innerText = messages[Math.floor(Math.random() * messages.length)];
});

// Mini juego de login
document.getElementById("login-button").addEventListener("click", function () {
    const password = document.getElementById("password").value.trim().toLowerCase();
    if (password === "mi ojitos lindos") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("app-container").style.display = "block";
        startCountdown();
        createHearts();
    } else {
        document.getElementById("error-message").innerText = "Oops, intenta de nuevo 😢";
    }
});

function startCountdown() {
    const targetDate = new Date("February 14, 2025 00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerText = `${days}`;
    }, 1000);
}

// Función para crear la lluvia de corazones más grandes
function createHearts() {
    let heartsContainer = document.querySelector(".hearts-container");

    // Si el contenedor no existe, lo creamos
    if (!heartsContainer) {
        heartsContainer = document.createElement("div");
        heartsContainer.className = "hearts-container";
        document.body.appendChild(heartsContainer);
    }
    
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.style.left = `${Math.random() * 100}%`; // Posición aleatoria
        heart.style.animationDuration = `${3 + Math.random() * 3}s`; // Variación de velocidad
        heartsContainer.appendChild(heart);

        // Eliminar el corazón después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Cartas con mensajes
const letters = [
    "Mi amor, cada día a tu lado es increíble ❤️",
    "Eres la persona más especial del mundo 💕",
    "Prometo amarte por siempre y hacerte feliz 🥰",
];
function openEnvelope(index) {
    document.getElementById("letter-message").innerText = letters[index - 1];
}
    
// Generar mensajes románticos corregido
const messages = [
    "Eres mi razón de ser 💖",
    "Te amo más que a nada en este mundo 🥰",
    "Cada día a tu lado es un regalo 🎁",
    "Mi amor por ti es infinito ✨",
];

document.getElementById("generate-message").addEventListener("click", function () {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("romantic-message").innerText = randomMessage;
});
