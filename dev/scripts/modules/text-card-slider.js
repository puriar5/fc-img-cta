// import $ from "jquery";
// import "slick-carousel";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


class sliderSwiperStories {
    constructor() {
        this.events();
        this.sliderInit();
        this.paginationClass = $('.card-slider-01-control .slider__pagination');
    }

    sliderInit() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var swiper = new Swiper('.card-slider', {
            slidesPerView: 1,
            spaceBetween: 36,
            grabCursor: true,
            loop: false,
            speed: 500,
            allowTouchMove: true,
            // autoHeight: true,
            pagination: {
                el: '.card-slider-01-control .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.card-slider-01-control .slider__button-next',
                prevEl: '.card-slider-01-control .slider__button-prev',
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
