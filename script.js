// Login
document.getElementById("login-button").addEventListener("click", function () {
    const password = document.getElementById("password").value.trim().toLowerCase();
    if (password === "mi ojitos lindos") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("app-container").style.display = "block";
        startCountdown();
        showNotification("¡Bienvenida, amor! 💖");
    } else {
        document.getElementById("error-message").innerText = "Oops, intenta de nuevo 😢";
    }
});

// Cuenta regresiva
function startCountdown() {
    const targetDate = new Date("February 14, 2025 00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerText = `${days} días`;
    }, 1000);
}

// Mensajes románticos aleatorios
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

// Sobres virtuales
const letters = [
    "Mi amor, cada día a tu lado es increíble ❤️",
    "Eres la persona más especial del mundo 💕",
    "Prometo amarte por siempre y hacerte feliz 🥰",
];

function openEnvelope(index) {
    document.getElementById("letter-message").innerText = letters[index - 1];
}

// Notificaciones
function showNotification(message) {
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification("💖 Mensaje de San Valentín", { body: message });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("💖 Mensaje de San Valentín", { body: message });
            }
        });
    }
}
