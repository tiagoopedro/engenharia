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

function clickMenu() { 
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } 
    else {
        itens.style.display = 'block'
    } 
}

function clickPerfil() { 
    if (descricao.style.display == 'block') {
        descricao.style.display = 'none'
    } 
    else {
        descricao.style.display = 'block'
    } 
}

function clickPerfil2() { 
    if (d2.style.display == 'block') {
        d2.style.display = 'none'
    } 
    else {
        d2.style.display = 'block'
    } 
}

function clickPerfil3() { 
    if (d3.style.display == 'block') {
        d3.style.display = 'none'
    } 
    else {
        d3.style.display = 'block'
    } 
}