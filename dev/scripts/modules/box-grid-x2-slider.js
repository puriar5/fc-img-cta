// import $ from "jquery";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

class timelineSlider {
    constructor() {
        if ($(window).width() < 768) {
            this.timeLine();
        }
    }

    timeLine() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var Swipes = new Swiper('.cta-box-grid-x2-slider', {
            slidesPerView: 1,
            grabCursor: true,
            loop: false,
            speed: 500,
            loop:true,
            allowTouchMove: true,
            autoHeight: true,
            pagination: {
                el: '.cta-box-grid-x2-slider .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.cta-box-grid-x2-slider .slider__button-next',
                prevEl: '.cta-box-grid-x2-slider .slider__button-prev',
            },
            breakpoints: {
                1025: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
            },
        });
    }

    resizeEvents() {
        $(window).on('resize', () => {
            this.timeLine();
        });
    }

    clickEvents() {}

    events() {
        this.clickEvents();
        this.resizeEvents();
    }

    
   
}

export default timelineSlider;
new timelineSlider();
