import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


class sliderSwiperStories {
    constructor() {
        this.sliderInit();
        this.paginationClass = $('.slider-06-control .slider__pagination');
        this.events();
    }

    sliderInit() {
        Swiper.use([Navigation, Pagination, Autoplay]);
        var swiper = new Swiper('.quote-slider', {
            slidesPerView: 1,
            spaceBetween: 36,
            grabCursor: true,
            loop: true,
            autoHeight: true,
            speed: 500,
            allowTouchMove: false,
            pagination: {
                el: '.slider-06-control .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-06-control .slider__button-next',
                prevEl: '.slider-06-control .slider__button-prev',
            },
            breakpoints: {
                767:{
                    allowTouchMove: true,
                }
            },
            on: {
            afterInit: function(){
                setTimeout(function(){
                    let itemHeight = document.querySelector('.swiper-slide-active');
                    let wrapperHeight = document.querySelector('.swiper-wrapper');
                    // wrapperHeight.style.height=itemHeight.offsetHeight+'px';
                    wrapperHeight.style.height=10+'px';
                }, 200);
            },
        },
        });
        


    }

    resizeEvents() {
        $(window).on('resize', () => {
            this.sliderInit();
        });
    }

    clickEvents() {
        // $( ".slider__button-next" ).trigger( "click" );
    }
    clickEventsReverse() {
        // $( ".slider__button-prev" ).trigger( "click" );
    }

    events() {
        this.clickEvents();
        this.resizeEvents();
    }
}

export default sliderSwiperStories;
new sliderSwiperStories();
