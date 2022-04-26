// import $ from "jquery";
// import "slick-carousel";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

class sliderSwiper {
    constructor() {
        if ($(window).width() < 768) {
            this.sliderInit();
        }
        this.events();
        this.paginationClass = $('.slider-02-control .slider__pagination');
    }

    sliderInit() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var swiper = new Swiper('.slider-02', {
            spaceBetween: 36,
            autoHeight: true,
            speed: 500,
            grabCursor: false,
            allowTouchMove: false,
            pagination: {
                el: '.slider-02-control .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-02-control .slider__button-next',
                prevEl: '.slider-02-control .slider__button-prev',
            },
        });
    }

    resizeEvents() {
        $(window).on('resize', () => {
            if ($(window).width() < 768) {
                this.sliderInit();
            }
        });
        // $(window).on(
        // 	"resize",
        // 	debounce(() => {
        // 		if ($(window).width() < 768) {
        // 			this.sliderInit();
        // 		}
        // 	})
        // );
    }

    clickEvents() {}

    events() {
        this.clickEvents();
        this.resizeEvents();
    }
}

export default sliderSwiper;
new sliderSwiper();
