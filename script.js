    // Menu hamburguer em telas peqeunas
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fecha e abre o menu
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

// ==============================
// FEATURED PROJECTS
// ==============================

const track = document.querySelector(".projects-track");
const pages = document.querySelectorAll(".projects-page");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const dots = document.querySelectorAll(".slider-dots span");

let currentPage = 0;

function updateSlider() {

    track.style.transform = `translateX(-${currentPage * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentPage].classList.add("active");

}

// Próxima página
nextBtn.addEventListener("click", () => {

    currentPage++;

    if (currentPage >= pages.length) {
        currentPage = 0;
    }

    updateSlider();

});

// Página anterior
prevBtn.addEventListener("click", () => {

    currentPage--;

    if (currentPage < 0) {
        currentPage = pages.length - 1;
    }

    updateSlider();

});

// Clique nas bolinhas
dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentPage = index;
        updateSlider();

    });

});

// Inicializa
updateSlider();