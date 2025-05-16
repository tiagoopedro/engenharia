
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
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.5);
   
    target.forEach(function(element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass) //'animate' ou a const como foi inserido
        } /*else {
           element.classList.remove(animationClass) 
        }*/
    })
 }

 if(target.length) { 
 window.addEventListener('scroll', debounce(function() {
    animeScroll();
 }, 200));
}


/* funcao para que o menu aparece quando tem scroll up */

const menu = document.getElementById('menu'); // Seleciona o elemento do menu
let antes = window.pageYOffset;

function verificarScroll() {
    const atual = window.pageYOffset;
    if (atual < antes) {
        menu.classList.add('menu-fixo'); // Adiciona a classe quando o scroll não está no topo
    } else {
        menu.classList.remove('menu-fixo'); // Remove a classe quando o scroll está no topo
    }

    antes = atual;
}

window.addEventListener('scroll', verificarScroll); // Monitora o scroll

// Chamada inicial da função para verificar o scroll
verificarScroll();