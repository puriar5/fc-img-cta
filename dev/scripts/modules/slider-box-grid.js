// import $ from "jquery";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

class boxGridcard {
    constructor() {
        if ($(window).width() < 1025) {
            this.sliderInit();
        }
    }

    sliderInit() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var Swipes = new Swiper('.boxgrid-slider', {
            slidesPerView: 1,
            grabCursor: true,
            loop: false,
            speed: 500,
            allowTouchMove: true,
            // autoHeight: true,
            pagination: {
                el: '.boxgrid-slider .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.boxgrid-slider .slider__button-next',
                prevEl: '.boxgrid-slider .slider__button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 56,
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

export default boxGridcard;
new boxGridcard();
