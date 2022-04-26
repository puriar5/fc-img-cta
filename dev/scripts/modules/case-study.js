// import $ from "jquery";
// import "slick-carousel";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


class casestudyCard {
    constructor() {
        if ($(window).width() < 768) {
            this.sliderInit();
            this.paginationClass = $('.slider-01-control .slider__pagination');
            this.events();
        }
    }

    sliderInit() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var swiper = new Swiper('.slider', {
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
                767:{
                    slidesPerView: 3,
                    spaceBetween: 16,
                }
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

export default casestudyCard;
new casestudyCard();
