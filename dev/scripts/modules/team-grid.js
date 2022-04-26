class teamModal {
    constructor() {
        this.teamModal();
    }

    teamModal(){
        const $body = document.querySelector('body');
        var $themeHeader = document.querySelector('.theme-header');
        var $linkTrigger = document.querySelector('.js-trigger-team-modal');
        var $teamModal = document.querySelector('.team-modal');
        $linkTrigger.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                $teamModal.classList.toggle('is-open');
                $teamModal.classList.toggle('is-closed');
                $body.classList.toggle('overflow-hidden');
                $themeHeader.classList.toggle('bg-sand');
            },
            false
        );
    }

    events() {
    }
}

export default teamModal;
new teamModal();
