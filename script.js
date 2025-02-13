if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(reg => reg.unregister()); // Borra SW antiguos
    }).then(() => {
        navigator.serviceWorker.register("/service-worker.js")
            .then(() => console.log("Service Worker actualizado"))
            .catch(error => console.log("Error al registrar Service Worker:", error));
    });
}

// Definir la fecha y hora objetivo (hoy a las 20:30)
const targetDate = new Date();
targetDate.setHours(20, 30, 0, 0); // 20:30:00 horas de hoy

// Mensajes románticos que se mostrarán durante la cuenta regresiva
const romanticMessages = [
    "💕 Hoy es un día especial...",
    "🌹 Cada segundo es un paso más hacia la sorpresa...",
    "💖 Eres lo mejor que me ha pasado...",
    "😍 Espero que esto te haga sonreír...",
    "💘 Falta poco para algo increíble..."
];

function startCountdown() {
    const countdownTimer = document.getElementById("countdown-timer");
    const romanticMessage = document.getElementById("romantic-message");

    if (!countdownTimer || !romanticMessage) {
        console.error("No se encontraron los elementos del contador.");
        return;
    }
    
    let interval = setInterval(() => {
        const now = new Date().getTime(); // Hora actual
        const timeLeft = targetDate - now; // Diferencia en milisegundos

        if (timeLeft <= 0) {
            clearInterval(interval);
            document.getElementById("countdown-screen").style.display = "none"; // Oculta la pantalla del contador
            document.getElementById("question-container").classList.remove("hidden"); // Muestra la pregunta
            return;
        }

        // Convertir tiempo restante a horas, minutos y segundos
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownTimer.innerText = `${hours}h ${minutes}m ${seconds}s`;

        // Cambiar mensaje cada 10 segundos
        if (seconds % 10 === 0) {
            romanticMessage.innerText = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
        }

    }, 1000);
}

// Iniciar el contador cuando cargue la página
window.onload = startCountdown;

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

// Función para crear la lluvia de corazones más grandes
function createHearts() {
    let heartsContainer = document.querySelector(".hearts-container");

    // Si el contenedor no existe, lo creamos
    if (!heartsContainer) {
        heartsContainer = document.createElement("div");
        heartsContainer.className = "hearts-container";
        document.body.appendChild(heartsContainer);
    }
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            let heart = document.createElement("div");
            heart.className = "floating-heart";
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDuration = `${5 + Math.random() * 4}s`; // Variación en la velocidad
            heart.style.width = `${40 + Math.random() * 20}px`; // Tamaños variados
            heart.style.height = heart.style.width;
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 8000); // Mayor duración antes de desaparecer
        }, i * 300);
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
