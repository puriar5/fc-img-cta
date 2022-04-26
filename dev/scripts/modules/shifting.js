import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

class sliderShifting {
    constructor() {
        const self = this;
        this.paginationClass = $('.slider-shifting-control .slider__pagination');
        this.prefixes = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.$container = $('.js-shift-container');
        this.$timeline = $('.js-timeline');
        this.timelineItem = $('.js-timeline--item');
        this.timelineContent = $('.js-timeline-content');
        this.dropDown = $('.js-dropdown');
        this.$hasHovered = true;
        this.hideOnExit = false;
        this.handleResize();
        $(window).on('resize', () => {
            self.handleResize();
        });
    }

    sliderInit() {
        if (this.swiper) {
            return;
        }
        const originalContainer = this.$container.clone();

        Swiper.use([Navigation, Pagination, Autoplay]);
        const swiper = new Swiper('.slider-02', {
            spaceBetween: 36,
            autoHeight: false,
            speed: 500,
            grabCursor: true,
            autoHeight: false,
            allowTouchMove: true,
            pagination: {
                el: '.slider-shifting-control .slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-shifting-control .slider__button-next',
                prevEl: '.slider-shifting-control .slider__button-prev',
            },
        });
        this.swiper = swiper;
        swiper.on('slideChange', function () {
            $('.c-shifting--mobile span').removeClass('is-active');
            $('.c-shifting--mobile span').eq(swiper.activeIndex).addClass('is-active');
        });
    }

    shifitingInit() {
        const containerWidth = $('.js-shift-container').width();
        const contentWidth = $('.js-dropdown').width();
        $('.js-timeline--item').each(function (index, item) {
            if ($(this).hasClass('is-active')) {
            } else {
                $(this).css('width', (containerWidth - contentWidth) / 7);
            }
        });
       
        this.swiper?.destroy({
            deleteInstance: true,
            cleanStyles: true,
        });
        delete this.swiper;
        const self = this;
        self.dropDown.on(self.prefixes, function (e) {
            if (e.originalEvent.animationName === 'fadeOut') {
                self.dropDown.removeAttr('style');
            }
        });

        self.timelineItem.on('click', function (e) {
            const clickedElement = this;
            var isSelected = clickedElement.classList.contains('is-active');
            const containerWidthClicked = $('.js-shift-container').width();
            const contentWidthClicked = $('.js-dropdown').width();
            const eachWidthClicked = (containerWidthClicked - contentWidthClicked) / 7;
            if (!isSelected) {
                self.timelineItem.removeClass('hide-content');
                self.timelineItem.removeClass('is-active');
                clickedElement.classList.add('is-active');
                $('.js-timeline--item').each(function (index, item) {
                    if ($(this).hasClass('is-active')) {
                        $(this).css('width', '');
                    } else {
                        $(this).css('width', (containerWidthClicked - contentWidthClicked) / 7);
                    }
                });

                const clickedElementIndex = clickedElement.dataset.index;
                console.log(clickedElementIndex);
                console.log(eachWidthClicked);

                setTimeout(() => {
                    self.dropDownFollow(eachWidthClicked * clickedElementIndex);
                }, 200);

                // Hide previous dd content

                self.timelineContent.removeClass('animated fadeIn bounceIn');
            }
        });
    }

    dropDownFollow(pos) {
        this.dropDown.css('left', pos + 'px');
    }
    handleResize() {
        const self = this;
        if ($(window).width() < 768) {
            self.sliderInit();
        } else {
            self.shifitingInit();
            $('.js-timeline--item:first').trigger('click');
        }
    }
}

export default sliderShifting;
new sliderShifting();
