//Constanten voor hamburger menu//
const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

const openBtn = document.getElementById("MenuOpenen");
const closeBtn = document.getElementById("MenuSluiten");

//Vanaf hier is ChatGPT gebruikt om de tweede interactie te laten werken.//
// Prompt: "Leg mij uit hoe ik een klikbare carrousel kan maken" //
document.addEventListener('DOMContentLoaded', function() {
const carrousel = document.querySelector('.FotoCarrousel');
    if (!carrousel) return;
    
    const lijst = carrousel.querySelector('ul');
    const knopTerug = carrousel.querySelector('.KnopTerug');
    const knopVerder = carrousel.querySelector('.KnopVerder');
    const dots = carrousel.querySelectorAll('.Dot');
    
    const aantalSlides = 3;
    let huidigeSlide = 0;

    function updateCarrousel() {
        const verschuiving = huidigeSlide * 33.33;
        lijst.style.transform = `translateX(-${verschuiving}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('actief', index === huidigeSlide);
        });
    }

    knopVerder.addEventListener('click', function() {
        huidigeSlide = (huidigeSlide + 1) % aantalSlides;
        updateCarrousel();
    });

    knopTerug.addEventListener('click', function() {
        huidigeSlide = huidigeSlide - 1;
        if (huidigeSlide < 0) {
            huidigeSlide = aantalSlides - 1;
        }
        updateCarrousel();
    });

    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            huidigeSlide = index;
            updateCarrousel();
        });
    });

    updateCarrousel();    
});    
//Tot hier//
    
    
//Menu interactie openen//
openBtn.addEventListener("click", () => {
   //menu.hidden = false;
   nav.classList.add("open")
   })

    

// Menu interactie sluiten//
closeBtn.addEventListener("click", () => {
   //menu.hidden = true;
   nav.classList.remove("open")
   })

