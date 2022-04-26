// import $ from "jquery";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

class flipCard {
    constructor() {
        if ($(window).width() < 1025) {
            this.sliderInit();
        }
        this.flipCard();
    }

    flipCard(){
        var flipCard = $('.card-flip');
        var openCard = $('.card-flip__rightarrow');
        var closeCard = $('.card-flip__closearrow');
        $(openCard).click(function(){
            $(flipCard).removeClass('active');
            $(this).parents(flipCard).addClass('active');
        });
        $(closeCard).click(function(){
            $(this).parents(flipCard).removeClass('active');
        });
    }

    sliderInit() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var Swipes = new Swiper('.flipcard-slider', {
            slidesPerView: 1,
            grabCursor: true,
            loop: false,
            speed: 500,
            allowTouchMove: true,
            autoHeight: true,
            pagination: {
                el: '.flipcard-slider .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.flipcard-slider .slider__button-next',
                prevEl: '.flipcard-slider .slider__button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
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

export default flipCard;
new flipCard();
