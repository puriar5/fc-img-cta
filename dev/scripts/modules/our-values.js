// import $ from "jquery";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

class valuesSlider {
    constructor() {
       this.sliderInit();
    }

    sliderInit() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var Swipes = new Swiper('.our-values-slider', {
            slidesPerView: 1,
            spaceBetween: 16,
            grabCursor: true,
            speed: 500,
            loop:true,
            allowTouchMove: true,
            pagination: {
                el: '.our-values-slider .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.our-values-slider .slider__button-next',
                prevEl: '.our-values-slider .slider__button-prev',
            },
            breakpoints: {
                1025: {
                    slidesPerView: 2,
                    spaceBetween: 70,
                },
            },
        });
    }

    resizeEvents() {
        $(window).on('resize', () => {
            this.slideInit();
        });
    }

    clickEvents() {}

    events() {
        this.clickEvents();
        this.resizeEvents();
    }

    
   
}

export default valuesSlider;
new valuesSlider();
