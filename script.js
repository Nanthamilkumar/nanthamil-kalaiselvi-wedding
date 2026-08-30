// =====================================================
// WEDDING COUNTDOWN
// =====================================================

const weddingDate = new Date(
    "September 17, 2026 07:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// =====================================================
// HERO SCROLL BUTTON
// =====================================================

const heroScroll =
    document.querySelector(".hero-section .scroll-hint");


if (heroScroll) {

    heroScroll.addEventListener("click", () => {

        const nextSection =
            document.querySelector(".countdown-section");

        if (nextSection) {

            nextSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// =====================================================
// COUNTDOWN SECTION SCROLL
// =====================================================

const sectionScroll =
    document.querySelector(".section-scroll");


if (sectionScroll) {

    sectionScroll.addEventListener("click", () => {

        const invitation =
            document.querySelector(".invitation-section");

        if (invitation) {

            invitation.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}
