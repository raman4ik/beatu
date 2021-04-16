new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    speed: 2400,
    grabCursor: true,
    loop: false,
    parallax: true,
    slidesPerView: 1,

    mousewheel: {
        invert: false
    },



})