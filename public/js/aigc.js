$(function(){
    $('.nav-item').mouseenter(function(){
        $(this).siblings('.nav-item').removeClass('actived');
        $(this).find('.nav-item-name').addClass('actived');
    })
    $('.nav-item').mouseleave(function(){
        $(this).find('.nav-item-name').removeClass('actived');
    })

    // $('.nav-item-children1').mouseenter(function(){
    //     $(this).siblings().find('a').removeClass('actived');
    //     $(this).find('a').addClass('actived');
    // })
    // $('.nav-item-children1').mouseleave(function(){
    //     $(this).find('a').removeClass('actived');
    // })

})
