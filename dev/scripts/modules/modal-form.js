// import $ from "jquery";
// import "slick-carousel";

class modalPopup {
    constructor() {
        this.modalInit();
    }

    modalInit() {
        $('#request-form').click(function(){
            $('.modal-request-form').addClass('open');
        }); 

        $('.modal-request-form__close').click(function(){
            $('.modal-request-form').removeClass('open');
        });
    }

}

export default modalPopup;
new modalPopup();
