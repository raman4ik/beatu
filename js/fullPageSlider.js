import { Swiper } from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

    

  
    const swiperIMG = new Swiper('.slider-img', {
        loop: false,
        speed: 2400,
        parallax: true,
        slidesPerView: 1,
    })

    const swiperText = new Swiper('.slider-text', {
        loop: false,
        speed: 2400,
        mousewheel: {
            invert: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })

    swiperIMG.controller.control = swiperText
    swiperText.controller.control = swiperIMG


    