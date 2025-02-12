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
        document.getElementById("countdown").innerText = `${days}`;
    }, 1000);
}
