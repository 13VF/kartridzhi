$(document)
    .foundation({
        abide : {
            patterns: {
                mobilephone: /\+7 \(\d{3}\)–\d{3}–\d{4}/
            }
        }
    });
$(document).foundation();

$(function(){

    $('.request-form__input-tel').inputmask({
        mask: "+7 (999)–999–9999",
        showMaskOnHover: false
    });

    $('.request-form__btn').on('click', function(e){
        e.preventDefault();
        $('.request-form').submit();
    });

    $('.request-form__input').keydown(function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            $('.request-form').submit();
        }
    });

    $('.request-form').on('submit', function(e){
        e.preventDefault();
        if ( $('.request-form__name').hasClass('error') || $('.request-form__tel').hasClass('error') ) {
            return false;
        } else {
            var results = $('.request-form').serialize();
            $.ajax({
                type: "POST",
                url:"/ajax/send",
                data: results,
                dataType: "json",
                timeout: 25000/*,
                 success: function(response) {

                 }*/
            });
        }
    });
});