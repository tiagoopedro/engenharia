
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
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
   
    target.forEach(function(element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass) //'animate' ou a const como foi inserido
        } else {
           element.classList.remove(animationClass) 
        }
    })
 }

 if(target.length) { 
 window.addEventListener('scroll', function() {
    animeScroll();
 })}