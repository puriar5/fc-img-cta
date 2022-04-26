// import $ from "jquery";
// import "slick-carousel";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


class sliderQuote {
    constructor() {
        this.events();
        this.sliderInit();
        this.paginationClass = $('.slider-01-control.slider-paginate .slider__pagination');
    }

    sliderInit() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var Swipes = new Swiper('.slider-quote', {
            loop: false,
            pagination: {
                el: '.slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-quote .slider__button-next',
                prevEl: '.slider-quote .slider__button-prev',
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

export default sliderQuote;
new sliderQuote();
