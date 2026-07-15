// =====================================
// FOR DANI
// VERSION 1.0
// =====================================

const landing = document.getElementById("landing");
const website = document.getElementById("website");
const beginButton = document.getElementById("beginButton");

beginButton.addEventListener("click", () => {

    // Fade out landing screen

    landing.style.opacity = "0";

    landing.style.pointerEvents = "none";

    // Show website

    setTimeout(() => {

        landing.style.display = "none";

        website.style.display = "block";

        // Smooth fade in

        website.animate(

            [
                {
                    opacity: 0,
                    transform: "translateY(30px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],

            {
                duration: 900,
                easing: "ease"
            }

        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

});

/* =====================================
   Scroll Animation
===================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".fade-section").forEach(section=>{

    observer.observe(section);

});

/* ==========================================
   MEMORY CARDS
========================================== */

document.querySelectorAll(".memory-title").forEach(button=>{

    button.addEventListener("click",()=>{

        const card=button.parentElement;

        card.classList.toggle("active");

    });

});
