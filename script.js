const weddingDate = new Date("2026-09-17T00:00:00+05:30");

function updateCountdown() {
    const now = new Date();

    const countdownSection = document.querySelector(".countdown-section");
    const countdownContent = document.querySelector(".countdown-content");

    if (!countdownContent) return;

    const difference = weddingDate - now;

    // ============================================
    // BEFORE WEDDING DATE
    // ============================================

    if (difference > 0) {

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        const daysElement = document.querySelector("#days");
        const hoursElement = document.querySelector("#hours");
        const minutesElement = document.querySelector("#minutes");
        const secondsElement = document.querySelector("#seconds");

        if (daysElement) daysElement.textContent = days;
        if (hoursElement) hoursElement.textContent = hours;
        if (minutesElement) minutesElement.textContent = minutes;
        if (secondsElement) secondsElement.textContent = seconds;

        return;
    }

    // ============================================
    // WEDDING DATE HAS ARRIVED / PASSED
    // ============================================

    const weddingDayStart = new Date("2026-09-17T00:00:00+05:30");

    const daysSinceWedding = Math.floor(
        (now - weddingDayStart) /
        (1000 * 60 * 60 * 24)
    );

    // Wedding day
    if (daysSinceWedding === 0) {

        countdownContent.innerHTML = `
            <div class="section-label">
                ✦ OUR SPECIAL DAY ✦
            </div>

            <div class="hero-flower">
                🌸
            </div>

            <h2 class="after-wedding-title">
                Today Is Our<br>
                Special Day
            </h2>

            <p class="after-wedding-names">
                Nanthamil S <span>♥</span> Kalaiselvi M
            </p>

            <p class="after-wedding-message">
                The day we begin our forever together.
            </p>

            <p class="after-wedding-date">
                17 SEPTEMBER 2026
            </p>
        `;

        return;
    }

    // ============================================
    // AFTER WEDDING
    // ============================================

    const years = now.getFullYear() - weddingDayStart.getFullYear();

    let anniversaryDate = new Date(
        weddingDayStart.getFullYear() + years,
        weddingDayStart.getMonth(),
        weddingDayStart.getDate()
    );

    let completedYears = years;

    if (now < anniversaryDate) {
        completedYears--;
    }

    countdownContent.innerHTML = `
        <div class="section-label">
            ✦ OUR JOURNEY ✦
        </div>

        <div class="hero-flower">
            💕
        </div>

        <h2 class="after-wedding-title">
            Happily<br>
            Married
        </h2>

        <p class="after-wedding-names">
            Nanthamil S <span>♥</span> Kalaiselvi M
        </p>

        <p class="after-wedding-message">
            Our forever began on
            <strong>17 September 2026</strong>.
        </p>

        <div class="married-days">
            <span>${daysSinceWedding}</span>
            <small>
                ${daysSinceWedding === 1 ? "DAY" : "DAYS"}
                SINCE WE SAID "I DO"
            </small>
        </div>

        ${
            completedYears > 0
                ? `
                <p class="anniversary-message">
                    ❤️ ${completedYears}
                    ${completedYears === 1 ? "YEAR" : "YEARS"}
                    OF TOGETHERNESS
                </p>
                `
                : ""
        }
    `;
}


// Update immediately
updateCountdown();

// Update every second before wedding
setInterval(updateCountdown, 1000);
