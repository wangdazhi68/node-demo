$(function(){
    $('.nav-item').mouseenter(function(){
        $(this).siblings('.nav-item').removeClass('actived');
        $(this).find('.nav-item-name').addClass('actived');
    })
    $('.nav-item').mouseleave(function(){
        $(this).find('.nav-item-name').removeClass('actived');
    })
})

