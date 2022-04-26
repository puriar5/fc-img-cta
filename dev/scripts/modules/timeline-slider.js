// import $ from "jquery";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

class timelineSlider {
    constructor() {
        if ($(window).width() < 1025) {
            this.timeLine();
        }
    }

    timeLine() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var Swipes = new Swiper('.timeline-slider', {
            slidesPerView: 1.5,
            spaceBetween: 16,
            grabCursor: true,
            loop: false,
            speed: 500,
            // loop:true,
            allowTouchMove: true,
            autoHeight: true,
            pagination: {
                el: '.timeline-slider .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.timeline-slider .slider__button-next',
                prevEl: '.timeline-slider .slider__button-prev',
            },
            breakpoints: {
                768: {
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
