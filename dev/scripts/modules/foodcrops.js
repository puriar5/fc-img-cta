// import Swiper from 'swiper';

import SmoothScrollbar from 'smooth-scrollbar';
import ScrollTriggerPlugin from './vendor/smooth-scrollbar/ScrollTriggerPlugin';
import SoftScrollPlugin from './vendor/smooth-scrollbar/SoftScrollPlugin';
import gsap from "gsap";
import {preloadImages, calcDrawImage} from "./utils";

SmoothScrollbar.use(ScrollTriggerPlugin, SoftScrollPlugin);

class global {
    constructor() {
        this.intiScrollBar();
        this.events();
        this.stickyHeader();
        this.hamburger();
        this.megaMenu();
        this.megamenuPopup();

        this.squenceHeart();
    }

    squenceHeart(){
        // generate array of images paths. length = frames length, see: /src/assets/img
    const urls = [...new Array(93)].fill(0).map((value, index) => `/fc/images/hearts/Silhouette_With_Beating_Heart_PLAY_3_TIMES_000${(index + 1) <10 ? '0'+(index+1): (index+1)}.jpg`);
    console.log(urls)
    // load images async
    const images = preloadImages(urls);
    console.log(images);

    const container = document.querySelector('.fc-heart-sequence');
    const canvas = container.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    // create "scrub" ScrollTrigger effect with pin of main block
    // pinType: transform is required when use pin with smooth scrollbar
    const tl = new gsap.timeline({
        scrollTrigger: {
            trigger: container,
            scrub: true,
            start: "top top",
            end: "200%", // scene duration
            pin: true,
            pinType: "transform" 
        }
    });

    // canvas resize handler
    window.addEventListener('resize', function resize() {
        ctx.canvas.width = document.documentElement.clientWidth;
        ctx.canvas.height = document.documentElement.clientHeight;
        return resize;
    }());

    // when all images ready
    images.then((imgs) => {
        const counter = {i: 0}; // iteration object

        tl.to(counter, {
            i: imgs.length - 1, // increment counter to frames length
            roundProps: "i", // round, only int
            ease: "none", // ease provided by smooth-scroll momentum
            immediateRender: true, // render first frame immediately
            onUpdate: () => calcDrawImage(ctx, imgs[counter.i]) // draw image in canvas when timeline update
        }, 0);

        // draw current frame again when scroll stopped and resize happened
        window.addEventListener('resize', () => calcDrawImage(ctx, imgs[counter.i]));
    });
    }

    intiScrollBar(){
        const view = document.getElementById('view-main');
        const scrollbar = SmoothScrollbar.init(view, {
            renderByPixels: false,
            damping: 0.075
        });
    }

    stickyHeader() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.theme-header').addClass('sticky');
                $('.menu-toggler').addClass('sticky-active');
                $('.pushy').addClass('sticky-active');
            } else {
                $('.theme-header').removeClass('sticky');
                $('.menu-toggler').removeClass('sticky-active');
                $('.pushy').removeClass('sticky-active');
            }
        });
    }

    megaMenu() {
        const $body = document.querySelector('body');
        var $menuAbout = document.querySelector('.menu-about');
        var $themeHeader = document.querySelector('.theme-header');
        var $menuCase = document.querySelector('.menu-case');
        var $menuWhat = document.querySelector('.menu-what');
        var $menuSkillet = document.querySelector('.menu-skillet');
        var $menuEquality = document.querySelector('.menu-equality');
        var $menuSearch = document.querySelector('.menu-search');
        const $close = document.querySelector('.mega-menu-close');
        var $toggleAboutLg = document.querySelector('.mega-toggle-about-lg');
        var $toggleCaseLg = document.querySelector('.mega-toggle-case-lg');
        var $toggleWhatLg = document.querySelector('.mega-toggle-what-lg');
        var $toggleSkilletLg = document.querySelector('.menu-toggle-skillet-lg');
        var $toggleEqualityLg = document.querySelector('.menu-toggle-equality-lg');
        var $toggleSearchLg = document.querySelector('.menu-toggle-search-lg');
        var $toggleAboutMd = document.querySelector('.mega-toggle-about-md');
        var $toggleSearchMd = document.querySelector('.mega-toggle-search-md');

        $toggleAboutLg.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                $menuAbout.classList.toggle('is-open');
                $menuAbout.classList.toggle('is-closed');
                $body.classList.toggle('mega-menu--open');
                $toggleAboutLg.classList.toggle('is-active');
                $('.mega-toggle-case-lg').removeClass('is-active');
                if ($('.menu-case').hasClass('is-open')) {
                    console.log('About button clicked: case menu open');
                    $menuCase.classList.toggle('is-open');
                    $menuCase.classList.toggle('is-closed');
                    $body.classList.toggle('mega-menu--open');
                }
            },
            false
        );

        $toggleCaseLg.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                $menuCase.classList.toggle('is-open');
                $menuCase.classList.toggle('is-closed');
                $body.classList.toggle('mega-menu--open');
                $toggleCaseLg.classList.toggle('is-active');
                $('.mega-toggle-about-lg').removeClass('is-active');
                if ($('.menu-about').hasClass('is-open')) {
                    console.log('Case button clicked: About menu open');
                    $menuAbout.classList.toggle('is-open');
                    $menuAbout.classList.toggle('is-closed');
                    $body.classList.toggle('mega-menu--open');
                }
            },
            false
        );

        $toggleWhatLg.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                $menuWhat.classList.toggle('is-open');
                $menuWhat.classList.toggle('is-closed');
                $body.classList.toggle('mega-menu--open');
            },
            false
        );

        $toggleSkilletLg.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                $menuSkillet.classList.toggle('is-open');
                $menuSkillet.classList.toggle('is-closed');
                $body.classList.toggle('mega-menu--open');
            },
            false
        );

        $toggleEqualityLg.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                $menuEquality.classList.toggle('is-open');
                $menuEquality.classList.toggle('is-closed');
                $body.classList.toggle('mega-menu--open');
            },
            false
        );

        $toggleSearchLg.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                $menuSearch.classList.toggle('is-open');
                $menuSearch.classList.toggle('is-closed');
                $body.classList.toggle('mega-menu--open');
                $toggleSearchLg.classList.toggle('is-active');
            },
            false
        );

        $toggleAboutMd.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                $menuAbout.classList.toggle('is-open');
                $menuAbout.classList.toggle('is-closed');
                $('.theme-header').toggleClass('theme-header--is-open');
                $body.classList.toggle('mega-menu-open');
                $body.classList.toggle('mega-menu--open');
                // $('.hamburger').toggleClass('is-active');
            },
            false
        );
        $toggleSearchMd.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                $menuSearch.classList.toggle('is-open');
                $menuSearch.classList.toggle('is-closed');
                $('.theme-header').toggleClass('theme-header--is-open');
                $body.classList.toggle('mega-menu-open');
                // $('.hamburger').toggleClass('is-active');
            },
            false
        );

        // $close.addEventListener(
        //     'click',
        //     (event) => {
        //         event.preventDefault();
        //         if ($('.mega-menu').hasClass('is-open')) {
        //             $menuAbout.classList.toggle('is-open');
        //             $menuAbout.classList.toggle('is-closed');
        //             $body.classList.toggle('overflow-hidden');
        //         }
        //     },
        //     false
        // );
        $('.mega-menu-close').click(function (e) {
            e.preventDefault();
            if ($('.mega-menu').hasClass('is-open')) {
                $('.mega-menu').removeClass('is-open');
                $('.mega-menu').addClass('is-closed');
                $('.menu-toggle-search-lg').removeClass('is-active');
                $('body').removeClass('overflow-hidden');
                $('body').removeClass('mega-menu--open');
                $('.mega-toggle-about-lg').removeClass('is-active');
                $('.mega-toggle-case-lg').removeClass('is-active');
            }
        });
    }

    // Hamburger Menu
    hamburger() {
        // Hamburger Menu
        var forEach = function (t, o, r) {
            if ('[object Object]' === Object.prototype.toString.call(t))
                for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
            else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
        };

        var hamburgers = document.querySelectorAll('.hamburger');

        if (hamburgers.length > 0) {
            forEach(hamburgers, function (hamburger) {
                hamburger.addEventListener(
                    'click',
                    function () {
                        this.classList.toggle('is-active');
                    },
                    false
                );
            });
        }

        $('.hamburger').on('click', function () {
            $('.theme-header').toggleClass('theme-header--is-open');
            $('body').toggleClass('pushy-open-right overflow-hidden');
            if ($('.mega-menu').hasClass('is-open')) {
                $('.mega-menu').toggleClass('is-open');
                $('.mega-menu').toggleClass('is-closed');
            }

            // $(".theme-header").toggleClass("dropdown-open");
        });
    }

    megamenuPopup() {
        var toggleBar = $('.navbar-toggle');
        var popupMenu = $('.megamenu-popup');
        var closePopup = $('.close-menu');
        $(toggleBar).click(function () {
            $(popupMenu).addClass('active');
        });
        $(closePopup).click(function () {
            $(popupMenu).removeClass('active');
        });
    }

    linkAnimatedLine() {
        var linkAnimate = document.querySelectorAll('.link-animated-line');
        if (linkAnimate.length > 0) {
            $('.link-animated-line > a').wrapInner($('<span class="main"></span>'));
            $('.link-animated-line > a').prepend('<span class="the-arrow -left"><span class="shaft"></span> </span>');
        }
    }


    // Click Event
    clickEvents() {
        $('.mega-menu-list ul li').hover(
            function () {
                $(this).parent('ul').addClass('active'); //Add an active class to the anchor
            },
            function () {
                $(this).parent('ul').removeClass('active'); //Remove an active class to the anchor
            }
        );
     
    }

    events() {
        // this.changeEvents();
        this.clickEvents();
    }
}

export default global;
new global();
