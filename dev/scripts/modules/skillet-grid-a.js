// import $ from "jquery";
// import "slick-carousel";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

class sliderSwiper {
    constructor() {
        if ($(window).width() < 768) {
            this.sliderInit();
        }
        this.events();
        this.paginationClass = $('.slider-skillet-grid-a-control .slider__pagination');
    }

    sliderInit() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var swiper = new Swiper('.slider-skillet-grid-a', {
            slidesPerView: 1,
            spaceBetween: 36,
            autoHeight: false,
            speed: 500,
            grabCursor: false,
            allowTouchMove: false,
            pagination: {
                el: '.slider-skillet-grid-a-control .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-skillet-grid-a-control .slider__button-next',
                prevEl: '.slider-skillet-grid-a-control .slider__button-prev',
            },
        });
    }

    resizeEvents() {
        $(window).on('resize', () => {
            if ($(window).width() < 768) {
                this.sliderInit();
            }
        });
    }

    clickEvents() {}

    events() {
        this.clickEvents();
        this.resizeEvents();
    }
}

export default sliderSwiper;
new sliderSwiper();
