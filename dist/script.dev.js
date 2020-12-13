"use strict";

$(document).ready(function () {
  $('#btn-1').click(function () {
    $('a').removeClass('test');
    $(this).addClass('test');
    $('.section-1').show();
    $('.section-2').hide();
  });
  $('#btn-2').click(function () {
    $('a').removeClass('test');
    $(this).addClass('test');
    $('.section-2').show();
    $('.section-1').hide();
  });
});