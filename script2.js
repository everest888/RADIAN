'use strict'; 

window.onload = function () {
    if ($(document).width() <= 415)

    
    $('.logo').click(function () {
        $(this).fadeToggle(500, function () {
            $('nav,.contacts').fadeToggle(500);
            $('html,body').animate({
                scrollTop: $('nav,.contacts').offset().top
            }, 1000)
            
        });
        $('#closebtn').css('display', 'block');
    });
    $('#closebtn').click(function () {
        $('nav,.contacts').slideToggle(1000, function () {
            $('').fadeToggle(500);
        });
        $('#closebtn').css('display', 'none');
        $('.logo').css('display', 'block');
    });
}