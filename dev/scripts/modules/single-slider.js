import $ from 'jquery';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
class singleSlider {
    constructor() {
        this.swiperSection = document.querySelectorAll(`.js-single-slider:not(.initialized)`);
        this.sliderTwo();
        this.events();
    }

    sliderTwo() {
        this.swiperSection.forEach((element) => {
            element.classList.add('initialized');

            var swiperContainer = element.querySelector('.swiper-container');
            var swiperPagination = element.querySelector('.swiper-pagination');

            const swiper = new Swiper(swiperContainer, {
                slidesPerView: 'auto',
                spaceBetween: 30,
                pagination: {
                    el: swiperPagination,
                    clickable: 'true',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    768: {
                        spaceBetween: 0,
                        effect: 'fade',
                    },
                },
            });
        });
    }

    resizeEvents() {
        $(window).on('resize', () => {
            this.sliderInit();
        });
    }

    events() {
        this.resizeEvents();
    }
}

export default singleSlider;
new singleSlider();
