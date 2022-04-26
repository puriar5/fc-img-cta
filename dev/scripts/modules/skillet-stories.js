// import $ from "jquery";
// import "slick-carousel";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


class sliderSwiperStories {
    constructor() {
        this.events();
        this.sliderInit();
        this.paginationClass = $('.slider-01-control .slider__pagination');
    }

    sliderInit() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var swiper = new Swiper('.slider', {
            slidesPerView: 1,
            spaceBetween: 36,
            grabCursor: true,
            loop: true,
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
                767:{
                    allowTouchMove: true,
                },
                1300: {
                    slidesPerView: 1.5,
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
