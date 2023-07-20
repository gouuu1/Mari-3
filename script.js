let slideIndex = 1;
function showSlide(n) {
    const slides = document.getElementsByClassName("slides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slide-show"); // Remove a classe que mostra a imagem atual
    }
    slides[slideIndex - 1].classList.add("slide-show"); // Adiciona a classe para mostrar a próxima imagem
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function autoSlide() {
    showSlide(slideIndex++);
}

setInterval(autoSlide, 2000); // Troca de slide a cada 2 segundos


