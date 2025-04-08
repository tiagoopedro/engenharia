let time = 2000;
let imageIndex = 0;
let images = document.querySelectorAll("#slider img");
let max = images.length;

function proximaImagem() {

    images[imageIndex].classList.remove("selected") 
    imageIndex++

    if(imageIndex >= max)
        imageIndex = 0

    images[imageIndex].classList.add("selected")
}

function start() {
    setInterval(() => { proximaImagem() }, time)
}

window.addEventListener("load", start)

function mudouTamanho() { 
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu(perfil) { 
    if (perfil.style.display == 'block') {
        perfil.style.display = 'none'
    } 
    else {
        perfil.style.display = 'block'
    } 
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });