/*global $*/

/********* jQuery for added effects to different pages **********/

$(document).ready(function() {
    $("#home-content").fadeIn(2000);
    $("#event-title").fadeIn(2000);
    $("#form-title").fadeIn(2000);
    $("#about-title").fadeIn(2000);
    
     /* Every time the window is scrolled load section */
    $(window).scroll( function(){
        lazyload('.hideinfo', 2000);
    });
    
    $(window).scroll( function(){
        lazyload('.hideo', 1500);
    });
    
    $(window).scroll( function(){
        lazyload('.hidecontact', 1500);
    });
    
    if (window.location == '#info' && window.location != '/about') {
        $('.hideinfo').animate({'opacity':'1'},2000);    
    }
    
    if (window.location == '#officers' && window.location != '/about') {
        $('.hideinfo').css('opacity','1');    
        $('.hideo').animate({'opacity': '1'}, 2000);
    }
    
    if (window.location == '#contact' && window.location != '/about') {
        $('.hideinfo').css('opacity','1');   
        $('.hideo').css('opacity','1');  
        $('.hidecontact').animate({'opacity':'1'},2000); 
    }
});


$(window).on('load', function() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});

function lazyload(x, y) {
    var windowTop = $(window).scrollTop();    //* top of the window
    var windowBottom = windowTop + $(window).height();        
    
    /* Check the location of each desired element */
    $(x).each( function(){
        var objectTop = $(this).offset().top;
        var objectBottom = objectTop + $(this).height();
            
        if(windowTop <= objectBottom && windowBottom >= objectTop) {
            $(this).animate({'opacity':'1'}, y);
        }
    }); 
}

