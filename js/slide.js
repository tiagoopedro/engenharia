  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 300000,
      disableOnInteraction: false,
    },
  });
 

