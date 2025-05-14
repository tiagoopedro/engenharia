
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

 //para otimizar usei essa funcao de debounce

 const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply (context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
 };

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
 window.addEventListener('scroll', debounce(function() {
    animeScroll();
 }, 200));
}