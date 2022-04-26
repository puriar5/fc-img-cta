class leadVideo {
    constructor() {
        this.changeHeight();
        // this.events();
    }

    resizeEvents() {}

    clickEvents() {
        var ppbutton = document.getElementById('js-trigger-video');
        var myVideo = document.getElementById('js-hero-video');
        ppbutton.addEventListener('click', playPause);
        function playPause() {
            if (myVideo.paused) {
                myVideo.play();
                ppbutton.innerHTML = '<img src="images/icon-pause.svg" alt="" class="img-pause">';
                // $('.hero-video').removeClass('hero-overlay');
            } else {
                myVideo.pause();
                ppbutton.innerHTML = '<img src="images/icon-play.svg" alt="" class="img-play">';
                // $('.hero-video').addClass('hero-overlay');
            }
        }
    }

    changeHeight() {
        let box = document.querySelector('.icn-description .icn-description-wrapper');
        if ($('.icn-description .icn-description-wrapper').length > 0) {
            let desHeight = box.offsetHeight;
            console.log(desHeight);
            const root = document.querySelector(':root'); //grabbing the root element
            root.style.setProperty('--icoheight', desHeight + 'px');
        }
    }

    events() {
        this.clickEvents();
        this.resizeEvents();
    }
}

export default leadVideo;
new leadVideo();
