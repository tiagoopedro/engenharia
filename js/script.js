

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
