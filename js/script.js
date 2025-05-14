
function mudouTamanho() { 
    if (window.innerWidth >= 992) {
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


 /* funcao da animacao */
 const target = document.querySelectorAll('[data-anime]');
 const animationClass = 'animate';

 function animeScroll() {
    const windowTop = window.pageYOffset + 1100;
    console.log(windowTop);
    target.forEach(function(element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass) //'animate' ou a const como foi inserido
        }

        console.log(element.offsetTop);
    })
 }

 window.addEventListener('scroll', function() {
    animeScroll();
 })