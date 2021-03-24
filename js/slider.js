new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,

    },


    grabCursor: true,
    autoHeight: true,
    loop: true,
    simulateTouch: false,

    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    }


})