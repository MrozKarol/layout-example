var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
});


var swiper = new Swiper(".mySwiper1", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 1,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});