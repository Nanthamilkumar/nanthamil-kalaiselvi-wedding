// ==========================================
// WEDDING COUNTDOWN
// ==========================================

const weddingDate = new Date("September 17, 2026 07:00:00").getTime();

const countdownContent = document.querySelector(".countdown-content");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    // ==========================================
    // WEDDING DAY HAS ARRIVED
    // ==========================================

    if (distance <= 0) {

        clearInterval(countdownTimer);

        countdownContent.innerHTML = `
            <div class="section-label">
                ✦ OUR SPECIAL DAY ✦
            </div>

            <h2 class="wedding-day-title">
                The Day Has Arrived
            </h2>

            <p class="wedding-day-message">
                Today we begin our forever together ♥
            </p>

            <div class="wedding-day-heart">
                ♥
            </div>
        `;

        return;
    }

    // ==========================================
    // CALCULATE TIME
    // ==========================================

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    // ==========================================
    // UPDATE HTML
    // ==========================================

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// Run immediately
updateCountdown();

// Update every second
const countdownTimer = setInterval(updateCountdown, 1000);
