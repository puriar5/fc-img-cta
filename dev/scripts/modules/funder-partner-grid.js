// import $ from "jquery";
// import "slick-carousel";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


class sliderSwiperStories {
    constructor() {
        this.events();
        this.sliderInit();
        this.paginationClass = $('.slider-01-control .slider__pagination');
        this.paginationClass = $('.slider-02-control .slider__pagination');
    }

    sliderInit() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var swiper = new Swiper('.slider-01', {
            slidesPerView: 1,
            spaceBetween: 36,
            grabCursor: true,
            loop: false,
            speed: 500,
            allowTouchMove: false,
            pagination: {
                el: '.slider-01-control .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-01-control .slider__button-next',
                prevEl: '.slider-01-control .slider__button-prev',
            },
            breakpoints: {
                768: {
                    spaceBetween: 16,
                    slidesPerView: 3,
                },
            },
        });
        var swiper = new Swiper('.slider-03', {
            slidesPerView: 1,
            spaceBetween: 36,
            grabCursor: true,
            loop: false,
            speed: 500,
            allowTouchMove: false,
            pagination: {
                el: '.slider-03-control .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-03-control .slider__button-next',
                prevEl: '.slider-03-control .slider__button-prev',
            },
            breakpoints: {
                768: {
                    spaceBetween: 16,
                    slidesPerView: 3,
                },
            },
        });
    }

    resizeEvents() {
        $(window).on('resize', () => {
            this.sliderInit();
        });
    }

    clickEvents() {}

    events() {
        this.clickEvents();
        this.resizeEvents();
    }
}

export default sliderSwiperStories;
new sliderSwiperStories();
