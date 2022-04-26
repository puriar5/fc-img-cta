// import $ from "jquery";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

class lessGridSlider {
    constructor() {
        if ($(window).width() < 1025) {
            this.lessonGrid();
        }
    }

    lessonGrid() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var Swipes = new Swiper('.lesson-grid-slider', {
            slidesPerView: 2,
            spaceBetween: 16,
            grabCursor: true,
            loop: false,
            speed: 500,
            // loop:true,
            allowTouchMove: true,
            pagination: {
                el: '.lesson-grid-slider .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.lesson-grid-slider .slider__button-next',
                prevEl: '.lesson-grid-slider .slider__button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
            },
        });
    }

    resizeEvents() {
        $(window).on('resize', () => {
            this.lessonGrid();
        });
    }

    clickEvents() {}

    events() {
        this.clickEvents();
        this.resizeEvents();
    }

    
   
}

export default lessGridSlider;
new lessGridSlider();
