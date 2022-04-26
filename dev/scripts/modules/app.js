import 'popper.js';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
// import 'bootstrap-select';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/collapse';
import BodyMoving from './bodymoving';
// import Swiper from 'swiper';

class global {
    constructor() {
        this.myModal = document.getElementById('exampleModal');
        this.events();
        this.linkAnimatedLine();
        this.stickyHeader();
        this.bgColorChange();
        this.hamburger();
        this.megaMenu();
        this.megamenuPopup();
        this.toggleContent();
        this.btnBubble();
        this.readMore();
        this.customSelect();
        this.initBodyMoving();
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

    linkAnimatedLine() {
        var linkAnimate = document.querySelectorAll('.link-animated-line');
        if (linkAnimate.length > 0) {
            $('.link-animated-line > a').wrapInner($('<span class="main"></span>'));
            $('.link-animated-line > a').prepend('<span class="the-arrow -left"><span class="shaft"></span> </span>');
        }
    }

    bgColorChange() {
        $(window)
            .scroll(function () {
                // selectors
                var $window = $(window),
                    $body = $('body'),
                    $panel = $('.bg-transition');

                // Change 33% earlier than scroll position so colour is there when you arrive.
                var scroll = $window.scrollTop() + $window.height() / 2;

                $panel.each(function () {
                    var $this = $(this);

                    // if position is within range of this panel.
                    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
                    // Remember we set the scroll to 33% earlier in scroll var.
                    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                        // Remove all classes on body with color-
                        $this.removeClass('bg-transition-active');
                        $body.removeClass(function (index, css) {
                            return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
                        });

                        // Add class of currently active div
                        $body.addClass('bg-' + $(this).data('color'));
                        $this.addClass('bg-transition-active');
                    } else {
                        $this.removeClass('bg-transition-active');
                    }
                });
            })
            .scroll();
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

    btnBubble() {
        // if (hamburgers.length > 0) {
        var btnBubble = document.querySelectorAll('.btn-bubble');
        if (btnBubble.length > 0) {
            $('.btn-bubble').wrapInner($('<strong></strong>'));
            $('.btn-bubble').prepend('<span></span><span></span><span></span><span></span>');
        }
    }

    toggleContent() {
        var toggleContent = $('.toggle-text');
        var viewBtn = $('.toggleRead');
        $(viewBtn).click(function () {
            $(this).toggleClass('active');
            $(toggleContent).toggleClass('active');
        });
    }

    readMore() {
        $('.readmore').click(function () {
            $('.collapse-text').addClass('expand');
            $(this).hide();
        });
    }

    // Custom select
    customSelect() {
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName('custom-select');
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName('select')[0];
            ll = selElmnt.length;
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement('DIV');
            a.setAttribute('class', 'select-selected');
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement('DIV');
            b.setAttribute('class', 'select-items select-items--is-hide');
            for (j = 1; j < ll; j++) {
                /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
                c = document.createElement('DIV');
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener('click', function (e) {
                    /*when an item is clicked, update the original select box,
        and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName('select')[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName('same-as-selected');
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute('class');
                            }
                            this.setAttribute('class', 'same-as-selected');
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener('click', function (e) {
                /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle('select-items--is-hide');
                this.classList.toggle('select-selected--is-active');
            });
        }
        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
  except the current select box:*/
            var x,
                y,
                i,
                xl,
                yl,
                arrNo = [];
            x = document.getElementsByClassName('select-items');
            y = document.getElementsByClassName('select-selected');
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i);
                } else {
                    y[i].classList.remove('select-selected--is-active');
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add('select-items--is-hide');
                }
            }
        }
        /*if the user clicks anywhere outside the select box,then close all select boxes:*/
        document.addEventListener('click', closeAllSelect);
    }

    // bodymoving
    initBodyMoving() {
        window.addEventListener('DOMContentLoaded', () => {
            document.querySelector('.bodymoving');
            new BodyMoving();
        });
    }

    // Change events
    changeEvents() {}

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
        $('.card-b06').on('click', function () {
            console.log('here');
            var currentUrl = $(this).attr('data-js-href');
            window.location.href = currentUrl;
        });
        $('.js-trigger-news-tab').on('click',function(e){
            console.log('clicked hered');
            e.preventDefault();
            $('html, body').animate({scrollTop: $('#filterTab').offset().top -100 }, 'slow');
            $('#nav-tab-02').trigger('click');
        })
        $('.js-trigger-stories-tab').on('click',function(e){
            console.log('clicked hered');
            e.preventDefault();
            $('html, body').animate({scrollTop: $('#filterTab').offset().top -100 }, 'slow');
            $('#nav-tab-03').trigger('click');
        })
        $('.js-trigger-resources-tab').on('click',function(e){
            console.log('clicked hered');
            e.preventDefault();
            $('html, body').animate({scrollTop: $('#filterTab').offset().top -100 }, 'slow');
            $('#nav-tab-04').trigger('click');
        })
    }

    events() {
        this.changeEvents();
        this.clickEvents();
    }
}

export default global;
new global();
